import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getListingLocations, getListingLocation, createListingLocation, deleteListingLocation } from '../../controllers/listingLocations';

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
