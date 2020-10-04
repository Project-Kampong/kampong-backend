import express from 'express';
export const router = express.Router();
import { check } from 'express-validator';
import { advancedResults, protect, authorise, checkInputError } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getFeaturedListings, getFeaturedListing, createFeaturedListing, deleteFeaturedListing } from '../../controllers/featuredlistings';

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
