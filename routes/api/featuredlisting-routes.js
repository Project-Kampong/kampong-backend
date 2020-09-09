const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { advancedResults, protect, authorise, checkInputError } = require('../../middleware');
const { INVALID_FIELD_MSG } = require('../../utils');

// import controllers here
const { getFeaturedListings, getFeaturedListing, createFeaturedListing, deleteFeaturedListing } = require('../../controllers/featuredlistings');

// Define input validation chain
const validateCreateFeaturedListingFields = [check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID()];

router.route('/').get(advancedResults('featuredlistings'), getFeaturedListings);
router.route('/:id').get(getFeaturedListing);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('admin'));

// map routes to controller
router.route('/').post(validateCreateFeaturedListingFields, checkInputError, createFeaturedListing);

router.route('/:id').delete(deleteFeaturedListing);

module.exports = router;
