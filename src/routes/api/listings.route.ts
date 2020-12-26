import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf, query } from 'express-validator';
import { advancedResults, checkInputError, protect, authorise } from '../../middleware';
import {
    DATETIME_REGEX,
    NO_FIELD_UPDATED_MSG,
    INVALID_FIELD_MSG,
    INVALID_EMAIL_MSG,
    INVALID_BOOLEAN_MSG,
    INVALID_TIMESTAMP_MSG,
    INVALID_LISTING_STATUS_MSG,
} from '../../utils';

// import controllers here
import {
    getListings,
    getFeaturedListings,
    getAllListingsOwnedByUser,
    getListing,
    createListing,
    updateListing,
    verifyOrFeatureListing,
    deleteListing,
    deactivateListing,
    searchListings,
} from '../../controllers/listings';

// Include other resource's controllers to access their endpoints
import { router as faqsRoute } from './faqs.route';
import { router as hashtagsRoute } from './hashtags.route';
import { router as likesRoute } from './likes.route';
import { router as listingCommentsRoute } from './listingComments.route';
import { router as listingLocationsRoute } from './listingLocations.route';
import { router as listingUpdatesRoute } from './listingUpdates.route';
import { router as milestonesRoute } from './milestones.route';
import { router as participantsRoute } from './participants.route';
import { router as jobsRoute } from './jobs.route';
import { router as organisationsRoute } from './organisations.route';

// Re-route this URI to other resource router
router.use('/:listing_id/faqs', faqsRoute);
router.use('/:listing_id/hashtags', hashtagsRoute);
router.use('/:listing_id/likes', likesRoute);
router.use('/:listing_id/listing-comments', listingCommentsRoute);
router.use('/:listing_id/listing-locations', listingLocationsRoute);
router.use('/:listing_id/listing-updates', listingUpdatesRoute);
router.use('/:listing_id/milestones', milestonesRoute);
router.use('/:listing_id/participants', participantsRoute);
router.use('/:listing_id/jobs', jobsRoute);
router.use('/:listing_id/organisations', organisationsRoute);

// Define input validation chain
const validateCreateListingFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).optional().isInt(),
    check('listing_title', INVALID_FIELD_MSG('listing_title')).trim().notEmpty(),
    check('category', INVALID_FIELD_MSG('category')).trim().notEmpty(),
    check('listing_email', INVALID_EMAIL_MSG).notEmpty().isEmail(),
    check('listing_status', INVALID_LISTING_STATUS_MSG).notEmpty().isIn(['ongoing', 'completed']),
    check('is_published', INVALID_BOOLEAN_MSG('is_published')).optional().isBoolean(),
    check('start_date', INVALID_TIMESTAMP_MSG('start date')).optional().matches(DATETIME_REGEX),
    check('end_date', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
    check('pics', INVALID_FIELD_MSG('pics')).isArray(),
];

const validateUpdateListingFields = [
    oneOf(
        [
            check('organisation_id').exists(),
            check('listing_title').exists(),
            check('category').exists(),
            check('about').exists(),
            check('tagline').exists(),
            check('mission').exists(),
            check('overview').exists(),
            check('problem').exists(),
            check('solution').exists(),
            check('outcome').exists(),
            check('listing_url').exists(),
            check('listing_email').exists(),
            check('listing_status').exists(),
            check('is_published').exists(),
            check('start_date').exists(),
            check('end_date').exists(),
            check('pics').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).optional().isInt(),
    check('listing_title', INVALID_FIELD_MSG('listing_title')).optional().trim().notEmpty(),
    check('category', INVALID_FIELD_MSG('category')).optional().trim().notEmpty(),
    check('listing_email', INVALID_EMAIL_MSG).optional().isEmail(),
    check('listing_status', INVALID_LISTING_STATUS_MSG).optional().isIn(['ongoing', 'completed']),
    check('is_published', INVALID_BOOLEAN_MSG('is_published')).optional().isBoolean(),
    check('start_date', INVALID_TIMESTAMP_MSG('start date')).optional().matches(DATETIME_REGEX),
    check('end_date', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
    check('pics', INVALID_FIELD_MSG('pics')).optional().isArray(),
];

const validateVerifyOrFeatureListingFields = [
    check('is_verified', INVALID_BOOLEAN_MSG('is_verified')).optional().isBoolean(),
    check('is_featured', INVALID_BOOLEAN_MSG('is_featured')).optional().isBoolean(),
];

const validateSearchListingsFields = [
    query('keyword', INVALID_FIELD_MSG('keyword')).exists(),
    query('limit', INVALID_FIELD_MSG('limit')).optional().isNumeric(),
];

// map routes to controller
router.route('/').get(advancedResults('listingview'), getListings).post(protect, validateCreateListingFields, checkInputError, createListing);

router.route('/featured').get(getFeaturedListings);
router.route('/owner').get(getAllListingsOwnedByUser);
router.route('/search').get(validateSearchListingsFields, checkInputError, searchListings);

router.route('/:id').get(getListing);

router.route('/:id').put(protect, validateUpdateListingFields, checkInputError, updateListing).delete(protect, deleteListing);

router.route('/:id/deactivate').put(protect, deactivateListing);

router.route('/:id/verify-feature').put(protect, authorise('admin'), validateVerifyOrFeatureListingFields, checkInputError, verifyOrFeatureListing);
