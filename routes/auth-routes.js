const express = require('express');
const router = express.Router();

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

// map routes to controller
router.post('/register', register);
router.post('/login', login);
// router.get('/logout', protect, logout);
// router.get('/me', protect, getMe);
// router.put('/updatedetails', protect, updateDetails);
// router.put('/updatepassword', protect, updatePassword);
// router.post('/forgotpassword', forgotPassword);
// router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
