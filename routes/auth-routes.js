const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const { protect } = require('../middleware/auth');

// import controllers here
const {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword
  // forgotPassword,
  // resetPassword
} = require('../controllers/auth');
const { checkInputError } = require('../middleware/input-validation');

// map routes to controller
router.get('/logout', protect, logout);
router.get('/me', protect, getMe);

router.post(
  '/register',
  [
    check('name', 'Name is required').trim().not().isEmpty(),
    check('name', 'Name must contain alphabetic characters only').isAlpha(),
    check('email', 'Please include a valid email')
      .trim()
      .isEmail()
      .normalizeEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  checkInputError,
  register
);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email')
      .trim()
      .isEmail()
      .normalizeEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  checkInputError,
  login
);

router.put(
  '/updatedetails',
  protect,
  [
    oneOf(
      [
        check('name', 'Name is required').exists(),
        check('email', 'Please include a valid email').exists()
      ],
      'At least one field must be updated'
    ),
    check('name', 'Please include a valid name')
      .optional()
      .trim()
      .not()
      .isEmpty()
      .isAlpha(),
    check('email', 'Please include a valid email')
      .optional()
      .trim()
      .isEmail()
      .normalizeEmail()
  ],
  checkInputError,
  updateDetails
);

router.put(
  '/updatepassword',
  protect,
  [
    check('oldPassword', 'Please enter your old password').exists(),
    check(
      'newPassword',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  checkInputError,
  updatePassword
);

// router.post('/forgotpassword', forgotPassword);
// router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
