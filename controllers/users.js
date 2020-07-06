const { db } = require('../config/db');

// @desc    Get all users
// @route   GET /api/users
// @acess   Public
exports.getUsers = async (req, res) => {
  const rows = await db.query('SELECT * FROM users');
  console.log(rows);

  res.status(200).json({
    success: true,
    data: rows
  });
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private/Admin
exports.getUser = async (req, res) => {
  const rows = await db.query(
    `SELECT * FROM users WHERE id = ${req.params.id}`
  );

  res.status(200).json({
    success: true,
    data: rows
  });
};

// @desc    Create user
// @route   POST /api/users
// @access  Private/Admin
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // TODO: Hash password

  const createUserQuery = `INSERT INTO USERS (name, email, password, role) VALUES ('${name}', '${email}', '${password}', '${role}') RETURNING *`;

  const rows = await db.query(createUserQuery);

  res.status(201).json({
    success: true,
    data: rows
  });
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
  updateUserQuery += `WHERE id = ${id} RETURNING *`;

  const rows = await db.query(updateUserQuery);

  res.status(200).json({
    success: true,
    data: rows
  });
};

// @desc    Delete single user
// @route   DELETE /api/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
  const row = await db.query(`DELETE FROM users WHERE id = ${req.params.id}`);

  res.status(200).json({
    success: true,
    data: {}
  });
};
