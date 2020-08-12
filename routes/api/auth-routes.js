const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const { protect } = require('../../middleware/auth');
const { ALPHA_WHITESPACE_REGEX } = require('../../utils/regex');
const {
  INVALID_EMAIL_MSG,
  INVALID_ALPHA_SPACE_MSG,
  INVALID_PASSWORD_MSG,
  NO_FIELD_UPDATED_MSG,
  INVALID_EXISTING_MSG,
} = require('../../utils/inputExceptionMsg');

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
const { checkInputError } = require('../../middleware/inputValidation');

// map routes to controller
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);

router.get('/register/:confirmEmailToken/confirmemail', confirmEmail);

router.post(
  '/register',
  [
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
  ],
  checkInputError,
  register
);

router.post(
  '/login',
  [
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
  ],
  checkInputError,
  login
);

router.post(
  '/forgetpassword',
  [check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail()],
  checkInputError,
  forgetPassword
);

router.put(
  '/resetpassword/:resetToken',
  [check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 })],
  checkInputError,
  resetPassword
);

// routers below use protect middleware
router.use(protect);

router.put(
  '/updatedetails',
  [
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
  ],
  checkInputError,
  updateDetails
);

router.put(
  '/updatepassword',
  [
    check('oldPassword', INVALID_EXISTING_MSG('old password')).exists(),
    check('newPassword', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
  ],
  checkInputError,
  updatePassword
);

module.exports = router;
