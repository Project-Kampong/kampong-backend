import { v1 as uuidv1 } from 'uuid';
import { cleanseData, getSignedJwtToken } from '../utils';
import { db } from '../database/db';
import { UsersRepository } from '../database';
import { CreateUserSchema } from '../database/models';

class GoogleAuthController {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    /**
     * @desc Login using google
     * @route GET /api/auth/google-login
     * @access  Public
     */
    googleLogin = async (req: any, res: any, next: any) => {
        const profile = req.user;
        const user = await this.usersRepository.getUserByEmail(profile.emails[0].value);

        if (!user) {
            const userData: CreateUserSchema = {
                user_id: uuidv1(),
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                email: profile.emails[0].value,
                google_id: profile.id
            };
            cleanseData(userData);
            const createUserQueries = await db.tx(async (query) => {
                const createUser = await query.one('INSERT INTO loginuser (${this:name}) VALUES (${this:csv}) RETURNING *', userData);
                const createProfile = await query.one('INSERT INTO profile user_id VALUES $1 RETURNING *', createUser.user_id);
                return query.batch([createUser, createProfile]);
            });
            sendTokenResponse(createUserQueries[0], 200, res);
        }

        sendTokenResponse(user, 200, res);
    };
};

// Helper method to get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res, redirectHome = false) => {
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

export const googleAuthController = new GoogleAuthController(db.users);
