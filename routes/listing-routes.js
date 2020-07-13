const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const { DATETIME_REGEX } = require('../utils/regex');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  INVALID_BOOLEAN_MSG,
  INVALID_TIMESTAMP_MSG
} = require('../utils/inputExceptionMsg');

// import controllers here
const {
  getListings,
  getListing,
  createListing,
  updateListing,
  verifyListing,
  deleteListing
} = require('../controllers/listings');

// map routes to controller
router
  .route('/')
  .get(advancedResults('listings'), getListings)
  .post(
    protect,
    [
      check('organisation_id', INVALID_FIELD_MSG('organisation id'))
        .optional()
        .isInt(),
      check('title', INVALID_FIELD_MSG('title')).trim().notEmpty(),
      check('category', INVALID_FIELD_MSG('category')).trim().notEmpty(),
      check('listing_url', INVALID_FIELD_MSG('listing URL')).optional().isURL(),
      check('is_published', INVALID_BOOLEAN_MSG('is_published'))
        .optional()
        .isBoolean(),
      check('start_date', INVALID_TIMESTAMP_MSG('start date'))
        .optional()
        .matches(DATETIME_REGEX),
      check('end_date', INVALID_TIMESTAMP_MSG('end date'))
        .optional()
        .matches(DATETIME_REGEX)
    ],
    checkInputError,
    createListing
  );

router
  .route('/:id')
  .get(getListing)
  .put(
    protect,
    authorise('user', 'admin'),
    [
      oneOf(
        [
          check('organisation_id').exists(),
          check('title').exists(),
          check('category').exists(),
          check('about').exists(),
          check('tagline').exists(),
          check('mission').exists(),
          check('listing_url').exists(),
          check('pic1').exists(),
          check('pic2').exists(),
          check('pic3').exists(),
          check('pic4').exists(),
          check('pic5').exists(),
          check('is_published').exists(),
          check('start_date').exists(),
          check('end_date').exists()
        ],
        NO_FIELD_UPDATED_MSG
      ),
      check('organisation_id', INVALID_FIELD_MSG('organisation id'))
        .optional()
        .isInt(),
      check('title', INVALID_FIELD_MSG('title')).optional().trim().notEmpty(),
      check('category', INVALID_FIELD_MSG('category'))
        .optional()
        .trim()
        .notEmpty(),
      check('listing_url', INVALID_FIELD_MSG('listing URL')).optional().isURL(),
      check('is_published', INVALID_BOOLEAN_MSG('is_published'))
        .optional()
        .isBoolean(),
      check('start_date', INVALID_TIMESTAMP_MSG('start date'))
        .optional()
        .matches(DATETIME_REGEX),
      check('end_date', INVALID_TIMESTAMP_MSG('end date'))
        .optional()
        .matches(DATETIME_REGEX)
    ],
    checkInputError,
    updateListing
  )
  .delete(protect, deleteListing);

router
  .route('/:id/verify')
  .put(
    protect,
    authorise('admin'),
    [check('is_verified', INVALID_BOOLEAN_MSG('is_verified')).isBoolean()],
    checkInputError,
    verifyListing
  );

module.exports = router;
