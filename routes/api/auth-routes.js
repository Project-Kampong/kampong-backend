const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const { protect, checkInputError } = require('../../middleware');
const {
  ALPHA_WHITESPACE_REGEX,
  INVALID_EMAIL_MSG,
  INVALID_ALPHA_SPACE_MSG,
  INVALID_PASSWORD_MSG,
  NO_FIELD_UPDATED_MSG,
  INVALID_EXISTING_MSG,
} = require('../../utils');

// import controllers here
const {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
  confirmEmail,
  forgetPassword,
  resetPassword,
} = require('../../controllers/auth');

// input validation chain definition
const validateRegisterFields = [
  check('first_name', INVALID_ALPHA_SPACE_MSG('first name'))
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX),
  check('last_name', INVALID_ALPHA_SPACE_MSG('last name'))
    .optional()
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX),
  check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
  check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
];

const validateLoginFields = [
  check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
  check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
];

const validateForgetPasswordFields = [
  check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
];

const validateResetPasswordFields = [
  check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
];

const validateUpdateDetailsFields = [
  oneOf(
    [
      check('first_name').exists(),
      check('last_name').exists(),
      check('email').exists(),
    ],
    NO_FIELD_UPDATED_MSG
  ),
  check('first_name', INVALID_ALPHA_SPACE_MSG('first name'))
    .optional()
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX),
  check('last_name', INVALID_ALPHA_SPACE_MSG('last name'))
    .optional()
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX),
  check('email', INVALID_EMAIL_MSG)
    .optional()
    .trim()
    .isEmail()
    .normalizeEmail(),
];

const validateUpdatePasswordFields = [
  check('oldPassword', INVALID_EXISTING_MSG('old password')).exists(),
  check('newPassword', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
];

// map routes to controller
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);
router.get('/register/:confirmEmailToken/confirmemail', confirmEmail);
router.post('/register', validateRegisterFields, checkInputError, register);
router.post('/login', validateLoginFields, checkInputError, login);
router.post(
  '/forgetpassword',
  validateForgetPasswordFields,
  checkInputError,
  forgetPassword
);
router.put(
  '/resetpassword/:resetToken',
  validateResetPasswordFields,
  checkInputError,
  resetPassword
);

// routers below use protect middleware
router.use(protect);

router.put(
  '/updatedetails',
  validateUpdateDetailsFields,
  checkInputError,
  updateDetails
);

router.put(
  '/updatepassword',
  validateUpdatePasswordFields,
  checkInputError,
  updatePassword
);

module.exports = router;
