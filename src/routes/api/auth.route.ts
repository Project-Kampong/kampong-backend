import passport from 'passport';
import express from 'express';
export const router = express.Router();
import rateLimit from 'express-rate-limit';
import { check, oneOf } from 'express-validator';
import { protect, checkInputError, asyncHandler } from '../../middleware';
import {
    ALPHA_WHITESPACE_REGEX,
    PASSWORD_REGEX,
    INVALID_EMAIL_MSG,
    INVALID_ALPHA_SPACE_MSG,
    INVALID_PASSWORD_MSG,
    NO_FIELD_UPDATED_MSG,
    INVALID_EXISTING_MSG,
} from '../../utils';

// import controllers here
import {
    register,
    login,
    logout,
    getMe,
    updateDetails,
    updatePassword,
    confirmEmail,
    forgetPassword,
    resetPassword,
    resendActivationEmail,
} from '../../controllers/auth';
import { googleAuthController } from '../../controllers/googleAuth';
import { facebookAuthController } from '../../controllers/facebookAuth';

// input validation chain definition
const validateRegisterFields = [
    check('first_name', INVALID_ALPHA_SPACE_MSG('first name')).trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('last_name', INVALID_ALPHA_SPACE_MSG('last name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

const validateLoginFields = [
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

const validateForgetPasswordFields = [check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail()];

const validateResetPasswordFields = [check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX)];

const validateUpdateDetailsFields = [
    oneOf([check('first_name').exists(), check('last_name').exists(), check('email').exists()], NO_FIELD_UPDATED_MSG),
    check('first_name', INVALID_ALPHA_SPACE_MSG('first name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('last_name', INVALID_ALPHA_SPACE_MSG('last name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('email', INVALID_EMAIL_MSG).optional().trim().isEmail().normalizeEmail(),
];

const validateUpdatePasswordFields = [
    check('oldPassword', INVALID_EXISTING_MSG('old password')).exists(),
    check('newPassword', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

// Request limiter middleware for auth endpoints
const authRequestLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 min window
    max: 5, // start blocking after 5 requests
    message: { success: false, error: 'Request limit exceeded, please try again in 5 minutes.' },
});

// map routes to controller
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);
router.get('/register/:confirmEmailToken/confirm-email', confirmEmail);
router.post('/register', validateRegisterFields, checkInputError, register);
router.post('/login', validateLoginFields, checkInputError, login);
router.post('/forget-password', authRequestLimiter, validateForgetPasswordFields, checkInputError, forgetPassword);
router.put('/forget-password/:resetToken', validateResetPasswordFields, checkInputError, resetPassword);

// Social authentication
router.get('/google-login', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/facebook-login', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/google-login/callback', passport.authenticate('google', { failureRedirect: '/login' }), asyncHandler(googleAuthController.googleLogin));
router.get(
    '/facebook-login/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    asyncHandler(facebookAuthController.facebookLogin),
);

// routers below use protect middleware
router.use(protect);

router.get('/register/resend-confirm-email', resendActivationEmail);

router.put('/update-details', validateUpdateDetailsFields, checkInputError, updateDetails);

router.put('/update-password', validateUpdatePasswordFields, checkInputError, updatePassword);
