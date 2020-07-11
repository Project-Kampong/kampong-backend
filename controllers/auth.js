const {
  checkPassword,
  getSignedJwtToken,
  hashPasword
} = require('../utils/auth.js');
const { db } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @desc    Register user and create user profile
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await hashPasword(password);

  /**
   * SQL Transaction, creating user and associated user profile
   * Returns an array of 2 json:
   * 1st json: User auth
   * 2nd json: User profile
   */
  const user = await db.tx(async query => {
    const createUser = await query.one(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}') RETURNING *`
    );
    const createProfile = await query.one(
      `INSERT INTO profiles (user_id) VALUES ('${createUser.user_id}') RETURNING *`
    );
    return query.batch([createUser, createProfile]);
  });

  sendTokenResponse(user[0], 200, res);
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
