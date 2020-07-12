const {
  checkPassword,
  getSignedJwtToken,
  hashPassword
} = require('../utils/auth.js');
const { db } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @desc    Register user (user profile will be created, enforced by sql triggers)
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPassword(password);

  const user = await db.one(
    `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}') RETURNING *`
  );

  sendTokenResponse(user, 200, res);
});

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await db.oneOrNone(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  // Throw exception if user does not exist
  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const originalPassword = user.password;
  const isMatch = await checkPassword(password, originalPassword);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
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
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
});

/**
 * @desc    Get current logged in user details
 * @route   GET /api/auth/me
 * @access  Private
 */
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await db.one(
    `SELECT * FROM users WHERE user_id = '${req.user.user_id}'`
  );

  res.status(200).json({
    success: true,
    data: user
  });
});

/**
 * @desc    Update current logged in user details (except password)
 * @route   PUT /api/auth/updatedetails
 * @access  Private
 */
exports.updateDetails = asyncHandler(async (req, res, next) => {
  // check if user exists
  const user = await db.oneOrNone(
    `SELECT * FROM users WHERE user_id = '${req.user.user_id}'`
  );

  // if user does not exist, return 401 unauthorised response
  if (!user) {
    return next(new ErrorResponse(`Not authorised to access this route`, 401));
  }

  const { name, email } = req.body;

  let updateUserQuery = `UPDATE users SET `;
  if (name) {
    updateUserQuery += `name = '${name}', `;
  }
  if (email) {
    updateUserQuery += `email = '${email}', `;
  }

  // remove last comma
  updateUserQuery = updateUserQuery.replace(/,\s*$/, ' ');
  updateUserQuery += `WHERE user_id = ${req.user.user_id} RETURNING *`;

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
  const user = await db.oneOrNone(
    `SELECT * FROM users WHERE user_id = '${req.user.user_id}'`
  );

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

  // hash new password
  const hashedPassword = await hashPassword(newPassword);

  let updateUserQuery = `UPDATE users SET password = '${hashedPassword}' WHERE user_id = ${req.user.user_id} RETURNING *`;

  const rows = await db.one(updateUserQuery);

  sendTokenResponse(rows, 200, res);
});

// Helper method to get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = getSignedJwtToken(user);

  // Set cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  // Set secure flag to true if in production (cookie will be sent through https)
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token
  });
};
