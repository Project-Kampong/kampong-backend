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

router.route('/:id').get(getListing).put(protect, updateListing);
//   .delete(deleteListing);

module.exports = router;
