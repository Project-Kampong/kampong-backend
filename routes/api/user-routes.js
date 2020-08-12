const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const { ALPHA_WHITESPACE_REGEX } = require('../../utils/regex');
const {
  INVALID_EMAIL_MSG,
  INVALID_ALPHA_SPACE_MSG,
  INVALID_PASSWORD_MSG,
  NO_FIELD_UPDATED_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/users');

// Include other resource's controllers to access their endpoints
const listingCommentRoute = require('./listingcomment-routes');

// Re-route this URI to other resource router
router.use('/:user_id/listing-comments', listingCommentRoute);

// all route to use protect middleware
router.use(protect);
router.use(authorise('admin')); // admin authorisation only

// map routes to controller
router
  .route('/')
  .get(advancedResults('users'), getUsers)
  .post(
    [
      check('first_name', INVALID_ALPHA_SPACE_MSG('first name'))
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX),
      check('last_name', INVALID_ALPHA_SPACE_MSG('last name'))
        .optional()
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX),
      check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
      check('password', INVALID_PASSWORD_MSG).isLength({ min: 6 }),
    ],
    checkInputError,
    createUser
  );

router
  .route('/:id')
  .get(getUser)
  .put(
    [
      oneOf(
        [
          check('first_name').exists(),
          check('last_name').exists(),
          check('email').exists(),
          check('password').exists(),
        ],
        NO_FIELD_UPDATED_MSG
      ),
      check('first_name', INVALID_ALPHA_SPACE_MSG('first name'))
        .optional()
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX),
      check('last_name', INVALID_ALPHA_SPACE_MSG('last name'))
        .optional()
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX),
      check('email', INVALID_EMAIL_MSG)
        .optional()
        .trim()
        .isEmail()
        .normalizeEmail(),
      check('password', INVALID_PASSWORD_MSG).optional().isLength({ min: 6 }),
    ],
    checkInputError,
    updateUser
  )
  .delete(deleteUser);

module.exports = router;
