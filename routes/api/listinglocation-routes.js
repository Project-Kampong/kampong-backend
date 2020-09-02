const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const { advancedResults, protect, checkInputError } = require('../../middleware');
const { INVALID_FIELD_MSG } = require('../../utils');

// import controllers here
const { getListingLocations, getListingLocation, createListingLocation, deleteListingLocation } = require('../../controllers/listinglocations');

// Define input validation chain
const validateCreateListingLocation = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('location_id', INVALID_FIELD_MSG('location id')).isInt(),
];

router.route('/').get(advancedResults('listinglocations', 'locations', 'location_id'), getListingLocations);
router.route('/:id').get(getListingLocation);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateListingLocation, checkInputError, createListingLocation);

router.route('/:id').delete(deleteListingLocation);

module.exports = router;
