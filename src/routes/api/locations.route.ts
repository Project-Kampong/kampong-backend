import express from 'express';
export const router = express.Router({ mergeParams: true });

import { getLocations, getLocation, createLocation, deleteLocation } from '../../controllers/locations';
import { check } from 'express-validator';
import { advancedResults, authorise, checkInputError, protect } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils/inputExceptionMsg';

// Include other resource's controllers to access their endpoints
import { router as listingsRoute } from './listings.route';

// Re-route this URI to other resource router
router.use('/:listing_id/listings', listingsRoute);

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
