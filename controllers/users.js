const { hashPassword } = require('../utils/auth.js');
const { db } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Admin
 */
exports.getUsers = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single user
 * @route   GET /api/users/:id
 * @access  Admin
 */
exports.getUser = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM users WHERE user_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Create user and associated user profile
 * @route   POST /api/users
 * @access  Admin
 */
exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await hashPassword(password);

  /**
   * SQL Transaction, creating user and associated user profile
   * Returns an array of 2 json:
   * 1st json: User auth
   * 2nd json: User profile
   */
  const rows = await db.tx(async query => {
    const createUser = await query.one(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}') RETURNING *`
    );
    const createProfile = await query.one(
      `INSERT INTO profiles (user_id) VALUES ('${createUser.user_id}') RETURNING *`
    );
    return query.batch([createUser, createProfile]);
  });

  res.status(201).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Update single user
 * @route   PUT /api/users/:id
 * @access  Admin
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
  // check if user exists
  const isValidUser = await db.oneOrNone(
    `SELECT * FROM users WHERE user_id = ${req.params.id}`
  );

  // return bad request response if invalid user
  if (!isValidUser) {
    return next(new ErrorResponse(`User does not exist`, 400));
  }

  const { name, email, password } = req.body;
  let updateUserQuery = `UPDATE users SET `;
  if (name) {
    updateUserQuery += `name = '${name}', `;
  }
  if (email) {
    updateUserQuery += `email = '${email}', `;
  }

  if (password) {
    const hashedPassword = await hashPassword(password);
    updateUserQuery += `password = '${hashedPassword}', `;
  }
  // remove last comma
  updateUserQuery = updateUserQuery.replace(/,\s*$/, ' ');
  updateUserQuery += `WHERE user_id = ${req.params.id} RETURNING *`;

  const rows = await db.one(updateUserQuery);

  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Delete single user
 * @route   DELETE /api/users/:id
 * @access  Admin
 */
exports.deleteUser = asyncHandler(async (req, res) => {
  // check if user exists
  const isValidUser = await db.oneOrNone(
    `SELECT * FROM users WHERE user_id = ${req.params.id}`
  );

  // return bad request response if invalid user
  if (!isValidUser) {
    return next(new ErrorResponse(`User does not exist`, 400));
  }

  const rows = await db.tx(async query => {
    const deleteUser = await query.one(
      `DELETE FROM users WHERE user_id = ${req.params.id} RETURNING *`
    );
    const deleteProfile = await query.one(
      `DELETE FROM profiles WHERE user_id = ${req.params.id} RETURNING *`
    );
    return query.batch([deleteUser, deleteProfile]);
  });

  res.status(200).json({
    success: true,
    data: rows
  });
});
