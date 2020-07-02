const { db } = require('../config/db');

// @desc    Get all users
// @route   GET /users
// @acess   Public
exports.getUsers = async (req, res) => {
  const rows = await db.query('SELECT * FROM users');
  console.log(rows);
  res.status(200).json(rows);
};
