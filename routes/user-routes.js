const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { checkInputError } = require('../middleware/input-validation');

// import controllers here
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

// map routes to controller
router
  .route('/')
  .get(getUsers)
  .post(
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 })
    ],
    checkInputError,
    createUser
  );

router
  .route('/:id')
  .get(getUser)
  .put(
    [
      check('name', 'Name is required').optional().not().isEmpty(),
      check('email', 'Please include a valid email').optional().isEmail(),
      check('password', 'Please enter a password with 6 or more characters')
        .optional()
        .isLength({ min: 6 })
    ],
    checkInputError,
    updateUser
  )
  .delete(deleteUser);

module.exports = router;
