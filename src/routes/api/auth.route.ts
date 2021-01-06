import express from 'express';
export const router = express.Router();
import rateLimit from 'express-rate-limit';
import { check } from 'express-validator';
import { protect, checkInputError, asyncHandler } from '../../middleware';
import {
    ALPHA_WHITESPACE_REGEX,
    PASSWORD_REGEX,
    INVALID_EMAIL_MSG,
    INVALID_ALPHA_SPACE_MSG,
    INVALID_PASSWORD_MSG,
    INVALID_EXISTING_MSG,
} from '../../utils';

// import controllers here
import { register, login, logout, getMe, updatePassword, confirmEmail, forgetPassword, resetPassword } from '../../controllers/auth';

// input validation chain definition
const validateRegisterFields = [
    check('username', INVALID_ALPHA_SPACE_MSG('username')).trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

const validateLoginFields = [
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

const validateForgetPasswordFields = [check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail()];

const validateResetPasswordFields = [check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX)];

const validateUpdatePasswordFields = [
    check('oldPassword', INVALID_EXISTING_MSG('old password')).exists(),
    check('newPassword', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

// Request limiter middleware for auth endpoints
const authRequestLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min window
    max: 5, // start blocking after 5 requests
    message: { success: false, error: 'Request limit exceeded, please try again in 15 minutes.' },
});

// map routes to controller
router.get('/logout', protect, asyncHandler(logout));
router.get('/me', protect, asyncHandler(getMe));

// Request limiter for all auth endpoints below this line
router.use(authRequestLimiter);

router.get('/register/:confirmEmailToken/confirm-email', asyncHandler(confirmEmail));
router.post('/register', validateRegisterFields, checkInputError, asyncHandler(register));
router.post('/login', validateLoginFields, checkInputError, asyncHandler(login));
router.post('/forget-password', authRequestLimiter, validateForgetPasswordFields, checkInputError, asyncHandler(forgetPassword));
router.put('/forget-password/:resetToken', validateResetPasswordFields, checkInputError, asyncHandler(resetPassword));

// routers below use protect middleware
router.use(protect);

router.put('/update-password', validateUpdatePasswordFields, checkInputError, asyncHandler(updatePassword));
