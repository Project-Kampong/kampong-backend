const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const { ALPHA_WHITESPACE_REGEX } = require('../utils/regex');
const { NO_FIELD_UPDATED_MSG } = require('../utils/inputExceptionMsg');

// import controllers here
const {
  getListings,
  getListing,
  createListing,
  updateListing,
  deleteListing
} = require('../controllers/listings');

// map routes to controller
router
  .route('/')
  .get(advancedResults('listings'), getListings)
  .post(protect, createListing);

router.route('/:id').get(getListing);
//   .put(
//     [
//       oneOf(
//         [
//           check('name').exists(),
//           check('email').exists(),
//           check('password').exists()
//         ],
//         NO_FIELD_UPDATED_MSG
//       ),
//       check('name', INVALID_NAME_MSG)
//         .optional()
//         .trim()
//         .not()
//         .isEmpty()
//         .matches(ALPHA_WHITESPACE_REGEX),
//       check('email', INVALID_EMAIL_MSG)
//         .optional()
//         .trim()
//         .isEmail()
//         .normalizeEmail(),
//       check('password', INVALID_PASSWORD_MSG).optional().isLength({ min: 6 })
//     ],
//     checkInputError,
//     updateListing
//   )
//   .delete(deleteListing);

module.exports = router;
