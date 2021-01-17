import crypto from 'crypto';
import { v1 as uuidv1 } from 'uuid';
import { checkPassword, ErrorResponse, getSignedJwtToken, hashPassword, parseSqlUpdateStmt } from '../utils';
import { db } from '../database/db';
import { mailerService } from '../services/mailer.service';

export class AuthController {
    /**
     * @desc    Register user and send email to user email with link to confirm email and activate account
     * @route   POST /api/auth/register
     * @access  Public
     */
    register = async (req, res, next) => {
        // Check if user email already exists
        const { username, email, password } = req.body;
        const userExists = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1 OR username = $2', [email, username]);

        if (userExists) {
            return next(new ErrorResponse(`Email has already been used.`, 400));
        }

        // Generate and hash confirm email token
        const token = crypto.randomBytes(20).toString('hex');
        const hashedEmailToken = this.hashToken(token);

        const userData = {
            user_id: uuidv1(),
            username,
            email,
            password: await hashPassword(password),
        };

        const pendingUserData = {
            user_id: userData.user_id,
            token: hashedEmailToken,
        };

        // Create confirmation url
        const confirmationUrl = `${req.protocol}://${req.get('host')}/api/auth/register/${token}/confirm-email`;

        const message =
            `Thank you for joining Project Kampong. Please click on the link to activate your account:` +
            `\n\n${confirmationUrl}\n\nPlease contact admin@kampong.com immediately if you are not the ` +
            `intended receipient of this mail.\n\nWelcome on board!\n\nTeam Kampong`;

        try {
            await mailerService.sendEmail({
                fromEmail: process.env.FROM_EMAIL,
                toEmail: email,
                subject: 'Project Kampong Account Activation',
                text: message,
            });

            /**
             * SQL Transaction, creating user and associated user profile
             * User profile nickname is set to default username
             * Returns an array of 3 json:
             * 1st json: User auth
             * 2nd json: User profile
             * 3rd json: Pending user entry
             */
            const createUserQueries = await db.tx(async (query) => {
                const createUser = await query.one('INSERT INTO loginuser (${this:name}) VALUES (${this:csv}) RETURNING *', userData);
                const createProfile = await query.one('INSERT INTO profile (user_id, nickname) VALUES ($1, $2) RETURNING *', [
                    createUser.user_id,
                    username,
                ]);
                const createPendingUser = await query.one('INSERT INTO pendinguser (${this:name}) VALUES (${this:csv}) RETURNING *', pendingUserData);
                return query.batch([createUser, createProfile, createPendingUser]);
            });

            this.sendTokenResponse(createUserQueries[0], 200, res);
        } catch (err) {
            return next(new ErrorResponse('Email could not be sent. Please register for an account again.', 409));
        }
    };

    /**
     * @desc    Activate user account via email confirmation
     * @route   GET /api/auth/register/:confirmEmailToken/confirm-email
     * @access  Public
     */
    confirmEmail = async (req, res, next) => {
        const hashedToken = this.hashToken(req.params.confirmEmailToken);

        // Check that pending user exists
        await db.one('SELECT * FROM pendinguser WHERE token = $1', hashedToken);

        const confirmEmail = await db.tx(async (query) => {
            const deletePendingUser = await query.one('DELETE FROM pendinguser WHERE token = $1 RETURNING *', hashedToken);
            const activateUser = await query.one(
                'UPDATE loginuser SET is_activated = TRUE WHERE user_id = $1 RETURNING *',
                deletePendingUser.user_id,
            );
            return query.batch([deletePendingUser, activateUser]);
        });
        this.sendTokenResponse(confirmEmail[1], 200, res, true);
    };

    /**
     * @desc    User forget password
     * @route   POST /api/auth/forget-password
     * @access  Public
     */
    forgetPassword = async (req, res, next) => {
        // Check if user email already exists
        const { email } = req.body;
        const userExists = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', email);

        if (!userExists) {
            return next(new ErrorResponse(`User does not exist.`, 404));
        }

        if (!userExists.password) {
            return next(new ErrorResponse(`User does not have a password.`, 403));
        }

        const forgetPasswordUserExists = await db.oneOrNone('SELECT * FROM forgetpassworduser WHERE email = $1', email);

        // if forget password user try after token has expired, delete existing entry and allow to go ahead
        if (forgetPasswordUserExists && forgetPasswordUserExists.expiry < Date.now()) {
            await db.one('DELETE FROM forgetpassworduser WHERE email = $1 RETURNING *', email);
        }

        // if forget password user attempts to make new forget password request while existing token has not expired, 400 response
        if (forgetPasswordUserExists && forgetPasswordUserExists.expiry >= Date.now()) {
            return next(new ErrorResponse(`Please reset your password via the link sent to your email address.`, 400));
        }

        // Generate and hash reset password token
        const token = crypto.randomBytes(20).toString('hex');
        const hashedResetToken = this.hashToken(token);

        // Set token expiry in 10min
        const tokenExpiry = Date.now() + 10 * 60 * 1000;

        // Store email, hashedResetToken, and tokenExpiry in ForgetPasswordUser table
        const data = {
            email,
            token: hashedResetToken,
            expiry: new Date(tokenExpiry),
        };

        await db.one('INSERT INTO forgetpassworduser (${this:name}) VALUES (${this:csv}) RETURNING *', data);

        // Create reset password url
        const resetPasswordUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${token}`;

        const message = `You are receiving this email because you have requested for a password reset. 
  Please make a PUT request to: \n\n ${resetPasswordUrl}`;

        try {
            await mailerService.sendEmail({
                fromEmail: process.env.FROM_EMAIL,
                toEmail: email,
                subject: 'Project Kampong: Reset Your Account Password',
                text: message,
            });

            res.status(200).json({
                success: true,
                data: resetPasswordUrl, // confirmationUrl given in response
            });
        } catch (err) {
            // delete data from forgetpassworduser table, if error
            await db.one('DELETE FROM forgetpassworduser WHERE email = $1 RETURNING *', email);

            return next(new ErrorResponse('Email could not be sent', 500));
        }
    };

    /**
     * @desc    Reset account password of user with forgotten password
     * @route   PUT /api/auth/forget-password/:resetToken
     * @access  Public
     */
    resetPassword = async (req, res, next) => {
        const { resetToken } = req.params;
        const hashedToken = this.hashToken(resetToken);

        // Look up forgetpassworduser table for token
        const user = await db.one('SELECT * FROM forgetpassworduser WHERE token = $1', hashedToken);

        // Destructure from results
        const { email, expiry } = user;
        // 400 response if token expired, and delete entry from forgetpassworduser table
        if (expiry < Date.now()) {
            await db.one('DELETE FROM forgetpassworduser WHERE token = $1 RETURNING *', hashedToken);
            return next(new ErrorResponse(`Reset password link has expired. Please send a 'Forget Password' request again.`, 400));
        }

        const { password } = req.body;
        const data = {
            password: await hashPassword(password), // hash new password
        };
        const updatePasswordQuery = parseSqlUpdateStmt(data, 'loginuser', 'WHERE email = $1 RETURNING *', email);

        /**
         * SQL Transaction, creating user and associated user profile
         * Returns an array of 2 json:
         * 1st json: Updated user password
         * 2nd json: Deleted forgetpassworduser entry
         */
        const updateUser = await db.tx(async (query) => {
            const updateUserPassword = await db.one(updatePasswordQuery);

            const deleteForgetPasswordUser = await query.one('DELETE FROM forgetpassworduser WHERE email = $1 RETURNING *', email);
            return query.batch([updateUserPassword, deleteForgetPasswordUser]);
        });
        this.sendTokenResponse(updateUser[0], 200, res);
    };

    /**
     * @desc    Login user
     * @route   POST /api/auth/login
     * @access  Public
     */
    login = async (req, res, next) => {
        const { email, password } = req.body;

        const user = await db.oneOrNone('SELECT * FROM loginuser WHERE email = $1', email);

        // Throw exception if user does not exist
        if (!user) {
            return next(new ErrorResponse('Invalid login credentials', 401));
        }

        // Check if password matches
        const originalPassword = user.password;
        const isMatch = await checkPassword(password, originalPassword);

        if (!isMatch) {
            return next(new ErrorResponse('Invalid login credentials', 401));
        }

        this.sendTokenResponse(user, 200, res);
    };

    /**
     * @desc    Log out and delete cookie
     * @route   GET /api/auth/logout
     * @access  Private
     */
    logout = async (req, res, next) => {
        // set token cookie to none
        res.cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
        });

        res.status(200).json({
            success: true,
            data: {},
        });
    };

    /**
     * @desc    Get current logged in user details
     * @route   GET /api/auth/me
     * @access  Private
     */
    getMe = async (req, res, next) => {
        const data = req.user;
        delete data['password'];
        res.status(200).json({
            success: true,
            data,
        });
    };

    /**
     * @desc    Update current logged in user password
     * @route   PUT /api/auth/update-password
     * @access  Private
     */
    updatePassword = async (req, res, next) => {
        // check if user exists
        const user = await db.oneOrNone('SELECT * FROM loginuser WHERE user_id = $1', req.user.user_id);

        // if user does not exist, return 401 unauthorised response
        if (!user) {
            return next(new ErrorResponse(`Not authorised to access this route`, 401));
        }

        // check if user has a password
        if (!user.password) {
            return next(new ErrorResponse(`User does not have a password.`, 403));
        }
        
        const { oldPassword, newPassword } = req.body;

        // validate old password
        const isMatch = await checkPassword(oldPassword, user.password);

        // return unauthorised response if password does not match
        if (!isMatch) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        const data = {
            password: await hashPassword(newPassword), // hash new password
        };

        const updatePasswordQuery = parseSqlUpdateStmt(data, 'loginuser', 'WHERE user_id = $1 RETURNING *', [req.user.user_id]);

        const rows = await db.one(updatePasswordQuery);

        this.sendTokenResponse(rows, 200, res);
    };

    // Helper method to get token from model, create cookie and send response
    private sendTokenResponse = (user, statusCode, res, redirectHome = false) => {
        // Create token
        const token = getSignedJwtToken(user);

        // Set cookie options
        const options = {
            expires: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000),
        };

        // Set secure flag to true if in production (cookie will be sent through https)
        if (process.env.NODE_ENV === 'production') {
            const secure = true;
            Object.assign(options, secure);
        }

        if (redirectHome) {
            res.status(statusCode).cookie('token', token, options).redirect('/');
        } else {
            res.status(statusCode).cookie('token', token, options).json({
                success: true,
                token,
            });
        }
    };

    // Hash pending user token
    private hashToken = (token: string) => {
        // Hash token and set to confirmPasswordToken field of model
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        return hashedToken;
    };
}

export const authController = new AuthController();
