const { db } = require('../config/db');

// @desc    Get all users
// @route   GET /api/users
// @acess   Public
exports.getUsers = async (req, res) => {
  try {
    const rows = await db.manyOrNone('SELECT * FROM users');

    res.status(200).json({
      success: true,
      data: rows
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e
    });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
exports.getUser = async (req, res) => {
  try {
    const rows = await db.one(
      `SELECT * FROM users WHERE id = ${req.params.id}`
    );
    res.status(200).json({
      success: true,
      data: rows
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e
    });
  }
};

// @desc    Create user
// @route   POST /api/users
// @access  Private/Admin
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // TODO: Hash password

  const createUserQuery = `INSERT INTO USERS (name, email, password, role) VALUES ('${name}', '${email}', '${password}', '${role}') RETURNING *`;

  try {
    const rows = await db.one(createUserQuery);
    res.status(201).json({
      success: true,
      data: rows
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e
    });
  }
};

// @desc    Update single user
// @route   PUT /api/users/:id
// @access  Private/Admin
exports.updateUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  let updateUserQuery = `UPDATE users SET `;
  if (name) {
    updateUserQuery += `name = '${name}', `;
  }
  if (email) {
    updateUserQuery += `email = '${email}', `;
  }
  // TODO: Hash password
  if (password) {
    updateUserQuery += `password = '${password}', `;
  }
  if (role) {
    updateUserQuery += `role = '${role}', `;
  }
  // remove last comma
  updateUserQuery = updateUserQuery.replace(/,\s*$/, ' ');
  updateUserQuery += `WHERE id = ${req.params.id} RETURNING *`;

  try {
    const rows = await db.one(updateUserQuery);

    res.status(200).json({
      success: true,
      data: rows
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e
    });
  }
};

// @desc    Delete single user
// @route   DELETE /api/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  try {
    const row = await db.one(
      `DELETE FROM users WHERE id = ${req.params.id} RETURNING *`
    );

    res.status(200).json({
      success: true,
      data: row
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: e
    });
  }
};
