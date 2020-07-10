const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// import controllers here
const {
  register,
  login
  // logout,
  // getMe,
  // updateDetails,
  // updatePassword,
  // forgotPassword,
  // resetPassword
} = require('../controllers/auth');
const { checkInputError } = require('../middleware/input-validation');

// map routes to controller
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
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
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  checkInputError,
  login
);
// router.get('/logout', protect, logout);
// router.get('/me', protect, getMe);
// router.put('/updatedetails', protect, updateDetails);
// router.put('/updatepassword', protect, updatePassword);
// router.post('/forgotpassword', forgotPassword);
// router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
