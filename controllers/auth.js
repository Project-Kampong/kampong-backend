const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const { checkPassword, cleanseData, ErrorResponse, getSignedJwtToken, hashPassword, parseSqlUpdateStmt, sendEmail } = require('../utils');
const { db } = require('../db/db');
const { asyncHandler } = require('../middleware');

/**
 * @desc    Register user and send email to user email with link to confirm email and activate account
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = asyncHandler(async (req, res, next) => {
    // Check if user email already exists
    const { first_name, last_name, email, password } = req.body;
    const userExists = await db.oneOrNone('SELECT * FROM Users WHERE email = $1', email);

    if (userExists) {
        return next(new ErrorResponse(`Email has already been used.`, 400));
    }

    // Generate and hash confirm email token
    const token = crypto.randomBytes(20).toString('hex');
    const hashedEmailToken = hashToken(token);

    // Set token expiry 30min from present
    const tokenExpiry = Date.now() + 30 * 60 * 1000;

    // Store data, hashedEmailToken, and tokenExpiry in PendingUsers table
    const data = {
        first_name,
        last_name,
        email,
        password: await hashPassword(password),
        token: hashedEmailToken,
        expiry: new Date(tokenExpiry),
    };

    const rows = await db.one('INSERT INTO PendingUsers (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    // Create confirmation url
    const confirmationUrl = `${req.protocol}://${req.get('host')}/api/auth/register/${token}/confirmemail`;

    const message = `Thank you for joining Project Kampong. Please click on the link to activate your account:
  \n\n${confirmationUrl}\n\nPlease contact admin@kampong.com immediately if you are not the intended receipient 
  of this mail.\n\nWelcome on board!\n\nTeam Kampong`;

    try {
        await sendEmail({
            email: rows.email,
            subject: 'Project Kampong Account Activation',
            message,
        });

        res.status(200).json({
            success: true,
            data: confirmationUrl, // confirmationUrl given in response
        });
    } catch (err) {
        console.error(err);
        // delete data from PendingUsers table, if error
        await db.one('DELETE FROM PendingUsers WHERE email = $1 RETURNING *', email);

        return next(new ErrorResponse('Email could not be sent', 500));
    }
});

/**
 * @desc    Create (activate) user account and profile, after email confirmation
 * @route   GET /api/auth/register/:confirmEmailToken/confirmemail
 * @access  Public
 */
exports.confirmEmail = asyncHandler(async (req, res, next) => {
    const hashedToken = hashToken(req.params.confirmEmailToken);

    // Look up PendingUsers table for token
    const pendingUser = await db.oneOrNone('SELECT * FROM PendingUsers WHERE token = $1', hashedToken);

    // if pendingUser entry does not exist, 400 Bad Request
    if (!pendingUser) {
        return next(new ErrorResponse(`Invalid account activation link. The user account may have been activated already.`, 400));
    }

    // Destructure from results
    const { first_name, last_name, email, password, expiry } = pendingUser;

    // 400 response if token expired, and delete entry from PendingUsers table
    if (expiry < Date.now()) {
        await db.one('DELETE FROM PendingUsers WHERE email = $1 RETURNING *', email);
        return next(new ErrorResponse(`Account activation link has expired. Please re-create your account again.`, 400));
    }

    // Get first_name, last_name, email, password from PendingUsers and store into data
    const data = { user_id: uuidv4(), first_name, last_name, email, password };

    const nickname = last_name ? first_name + ' ' + last_name : first_name;

    /**
     * SQL Transaction, creating user and associated user profile
     * Returns an array of 2 json:
     * 1st json: User auth
     * 2nd json: User profile
     */
    const user = await db.tx(async (query) => {
        const createUser = await query.one('INSERT INTO users (${this:name}) VALUES (${this:csv}) RETURNING *', data);
        const createProfile = await query.one('INSERT INTO profiles (user_id, nickname) VALUES ($1, $2) RETURNING *', [createUser.user_id, nickname]);
        const deletePendingUser = await query.one('DELETE FROM PendingUsers WHERE email = $1 RETURNING *', email);
        return query.batch([createUser, createProfile]);
    });
    sendTokenResponse(user[0], 200, res, true);
});

/**
 * @desc    User forget password
 * @route   POST /api/auth/forgetpassword
 * @access  Public
 */
exports.forgetPassword = asyncHandler(async (req, res, next) => {
    // Check if user email already exists
    const { email } = req.body;
    const userExists = await db.oneOrNone('SELECT * FROM Users WHERE email = $1', email);

    if (!userExists) {
        return next(new ErrorResponse(`User does not exist.`, 404));
    }

    // Generate and hash reset password token
    const token = crypto.randomBytes(20).toString('hex');
    const hashedResetToken = hashToken(token);

    // Set token expiry in 10min
    const tokenExpiry = Date.now() + 10 * 60 * 1000;

    // Store email, hashedEmailToken, and tokenExpiry in ForgetPasswordUsers table
    const data = {
        email,
        token: hashedResetToken,
        expiry: new Date(tokenExpiry),
    };

    const rows = await db.one('INSERT INTO ForgetPasswordUsers (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    // Create reset password url
    const resetPasswordUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${token}`;

    const message = `You are receiving this email because you have requested for a password reset. 
  Please make a PUT request to: \n\n ${resetPasswordUrl}`;

    try {
        await sendEmail({
            email: rows.email,
            subject: 'Reset Your Account Password',
            message,
        });

        res.status(200).json({
            success: true,
            data: resetPasswordUrl, // confirmationUrl given in response
        });
    } catch (err) {
        console.error(err);
        // delete data from ForgetPasswordUsers table, if error
        await db.one('DELETE FROM ForgetPasswordUsers WHERE email = $1 RETURNING *', email);

        return next(new ErrorResponse('Email could not be sent', 500));
    }
});

/**
 * @desc    Reset account password of user with forgotten password
 * @route   PUT /api/auth/resetpassword/:resetToken
 * @access  Public
 */
exports.resetPassword = asyncHandler(async (req, res, next) => {
    const { resetToken } = req.params;
    const hashedToken = hashToken(resetToken);

    // Look up ForgetPasswordUsers table for token
    let user = await db.oneOrNone('SELECT * FROM ForgetPasswordUsers WHERE token = $1', hashedToken);

    // if user entry does not exist, 400 Bad Request
    if (!user) {
        return next(new ErrorResponse(`Invalid reset password link. This link has expired.`, 400));
    }

    // Destructure from results
    const { email, expiry } = user;
    // 400 response if token expired, and delete entry from ForgetPasswordUsers table
    if (expiry < Date.now()) {
        await db.one('DELETE FROM ForgetPasswordUsers WHERE token = $1 RETURNING *', hashedToken);
        return next(new ErrorResponse(`Reset password link has expired. Please send a 'Forget Password' request again.`, 400));
    }

    const { password } = req.body;
    const data = {
        password: await hashPassword(password), // hash new password
    };
    const updatePasswordQuery = parseSqlUpdateStmt(data, 'users', 'WHERE email = $1 RETURNING *', email);

    /**
     * SQL Transaction, creating user and associated user profile
     * Returns an array of 2 json:
     * 1st json: Updated user password
     * 2nd json: Deleted ForgetPasswordUsers entry
     */
    const updateUser = await db.tx(async (query) => {
        const updateUserPassword = await db.one(updatePasswordQuery);

        const deleteForgetPasswordUser = await query.one('DELETE FROM ForgetPasswordUsers WHERE email = $1 RETURNING *', email);
        return query.batch([updateUserPassword, deleteForgetPasswordUser]);
    });
    sendTokenResponse(updateUser[0], 200, res);
});

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', email);

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

    sendTokenResponse(user, 200, res);
});

/**
 * @desc    Log out and delete cookie
 * @route   GET /api/auth/logout
 * @access  Private
 */
exports.logout = asyncHandler(async (req, res, next) => {
    // set token cookie to none
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: {},
    });
});

/**
 * @desc    Get current logged in user details
 * @route   GET /api/auth/me
 * @access  Private
 */
exports.getMe = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: req.user,
    });
});

/**
 * @desc    Update current logged in user details (except password)
 * @route   PUT /api/auth/updatedetails
 * @access  Private
 */
exports.updateDetails = asyncHandler(async (req, res, next) => {
    // check if user exists
    const user = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', req.user.user_id);

    // if user does not exist, return 401 unauthorised response
    if (!user) {
        return next(new ErrorResponse(`Not authorised to access this route`, 401));
    }

    const { first_name, last_name, email } = req.body;

    const data = {
        first_name,
        last_name,
        email,
    };

    cleanseData(data);

    const updateUserQuery = parseSqlUpdateStmt(data, 'users', 'WHERE user_id = $1 RETURNING *', [req.user.user_id]);

    const rows = await db.one(updateUserQuery);

    sendTokenResponse(rows, 200, res);
});

/**
 * @desc    Update current logged in user password
 * @route   PUT /api/auth/updatepassword
 * @access  Private
 */
exports.updatePassword = asyncHandler(async (req, res, next) => {
    // check if user exists
    const user = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', req.user.user_id);

    // if user does not exist, return 401 unauthorised response
    if (!user) {
        return next(new ErrorResponse(`Not authorised to access this route`, 401));
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

    const updatePasswordQuery = parseSqlUpdateStmt(data, 'users', 'WHERE user_id = $1 RETURNING *', [req.user.user_id]);

    const rows = await db.one(updatePasswordQuery);

    sendTokenResponse(rows, 200, res);
});

// Helper method to get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res, redirectHome = false) => {
    // Create token
    const token = getSignedJwtToken(user);

    // Set cookie options
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    // Set secure flag to true if in production (cookie will be sent through https)
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
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
const hashToken = (token) => {
    // Hash token and set to confirmPasswordToken field of model
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    return hashedToken;
};
