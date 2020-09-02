const express = require('express');
const router = express.Router({ mergeParams: true });

const { getLocations, getLocation, createLocation, deleteLocation } = require('../../controllers/locations');
const { check } = require('express-validator');
const { advancedResults, authorise, checkInputError, protect } = require('../../middleware');
const { INVALID_FIELD_MSG } = require('../../utils/inputExceptionMsg');

// Include other resource's controllers to access their endpoints
const listingRoute = require('./listing-routes');

// Re-route this URI to other resource router
router.use('/:listing_id/listings', listingRoute);

// Define input validation chain
const validateCreateLocation = [check('location', INVALID_FIELD_MSG('location')).notEmpty()];

router.route('/').get(advancedResults('locations'), getLocations);
router.route('/:id').get(getLocation);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('admin'));

// map routes to controller
router.route('/').post(validateCreateLocation, checkInputError, createLocation);

router.route('/:id').delete(deleteLocation);

module.exports = router;
