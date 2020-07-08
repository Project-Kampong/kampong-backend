const bcrypt = require('bcryptjs');
const { db } = require('../config/db');
const asyncHandler = require('../middleware/async');

// @desc    Get all users
// @route   GET /api/users
// @acess   Public
exports.getUsers = asyncHandler(async (req, res) => {
  const rows = await db.manyOrNone('SELECT * FROM users');

  res.status(200).json({
    success: true,
    data: rows
  });
});

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
exports.getUser = asyncHandler(async (req, res) => {
  const rows = await db.one(
    `SELECT * FROM users WHERE user_id = ${req.params.id}`
  );
  res.status(200).json({
    success: true,
    data: rows
  });
});

// @desc    Create user
// @route   POST /api/users
// @access  Private/Admin
exports.createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // TODO: Hash password
  const hashedPassword = await hashPasword(password);

  const createUserQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hashedPassword}') RETURNING *`;

  const rows = await db.one(createUserQuery);
  res.status(201).json({
    success: true,
    data: rows
  });
});

// @desc    Update single user
// @route   PUT /api/users/:id
// @access  Private/Admin
exports.updateUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  let updateUserQuery = `UPDATE users SET `;
  if (name) {
    updateUserQuery += `name = '${name}', `;
  }
  if (email) {
    updateUserQuery += `email = '${email}', `;
  }
  // TODO: Hash password
  if (password) {
    const hashedPassword = await hashPasword(password);
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

// @desc    Delete single user
// @route   DELETE /api/users/:id
// @access  Private/Admin
exports.deleteUser = asyncHandler(async (req, res) => {
  const row = await db.one(
    `DELETE FROM users WHERE user_id = ${req.params.id} RETURNING *`
  );

  res.status(200).json({
    success: true,
    data: row
  });
});

const hashPasword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
