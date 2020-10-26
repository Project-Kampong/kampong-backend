import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf, query } from 'express-validator';
import { advancedResults, checkInputError, protect, authorise, mapFilenameToLocation } from '../../middleware';
import {
    DATETIME_REGEX,
    NO_FIELD_UPDATED_MSG,
    INVALID_FIELD_MSG,
    INVALID_EMAIL_MSG,
    INVALID_BOOLEAN_MSG,
    INVALID_TIMESTAMP_MSG,
    INVALID_LISTING_STATUS_MSG,
    uploadFile,
} from '../../utils';

// import controllers here
import {
    getListings,
    getAllListingsOwnedByUser,
    getListingsAll,
    getListing,
    createListing,
    updateListing,
    verifyListing,
    deleteListing,
    deactivateListing,
    uploadListingPics,
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
import { router as listingSkillsRoute } from './listingSkills.route';
import { router as jobsRoute } from './job.route';
import { router as listingStoriesRoute } from './listingStories.route';

// Re-route this URI to other resource router
router.use('/:listing_id/faqs', faqsRoute);
router.use('/:listing_id/hashtags', hashtagsRoute);
router.use('/:listing_id/likes', likesRoute);
router.use('/:listing_id/listing-comments', listingCommentsRoute);
router.use('/:listing_id/listing-locations', listingLocationsRoute);
router.use('/:listing_id/listing-updates', listingUpdatesRoute);
router.use('/:listing_id/milestones', milestonesRoute);
router.use('/:listing_id/participants', participantsRoute);
router.use('/stories', listingStoriesRoute);
router.use('/:listing_id/stories', listingStoriesRoute);
router.use('/:listing_id/listing-skills', listingSkillsRoute);
router.use('/:listing_id/jobs', jobsRoute);

// Define input validation chain
const validateCreateListingFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).optional().isInt(),
    check('title', INVALID_FIELD_MSG('title')).trim().notEmpty(),
    check('category', INVALID_FIELD_MSG('category')).trim().notEmpty(),
    check('listing_url', INVALID_FIELD_MSG('listing URL')).optional().isURL(),
    check('listing_email', INVALID_EMAIL_MSG).notEmpty().isEmail(),
    check('listing_status', INVALID_LISTING_STATUS_MSG).notEmpty().isIn(['ongoing', 'completed']),
    check('is_published', INVALID_BOOLEAN_MSG('is_published')).optional().isBoolean(),
    check('start_date', INVALID_TIMESTAMP_MSG('start date')).optional().matches(DATETIME_REGEX),
    check('end_date', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
];

const validateUpdateListingFields = [
    oneOf(
        [
            check('organisation_id').exists(),
            check('title').exists(),
            check('category').exists(),
            check('about').exists(),
            check('tagline').exists(),
            check('mission').exists(),
            check('listing_url').exists(),
            check('listing_email').exists(),
            check('listing_status').exists(),
            check('is_published').exists(),
            check('start_date').exists(),
            check('end_date').exists(),
            check('pic1').exists(),
            check('pic2').exists(),
            check('pic3').exists(),
            check('pic4').exists(),
            check('pic5').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).optional().isInt(),
    check('title', INVALID_FIELD_MSG('title')).optional().trim().notEmpty(),
    check('category', INVALID_FIELD_MSG('category')).optional().trim().notEmpty(),
    check('listing_url', INVALID_FIELD_MSG('listing URL')).optional().isURL(),
    check('listing_email', INVALID_EMAIL_MSG).optional().isEmail(),
    check('listing_status', INVALID_LISTING_STATUS_MSG).optional().isIn(['ongoing', 'completed']),
    check('is_published', INVALID_BOOLEAN_MSG('is_published')).optional().isBoolean(),
    check('start_date', INVALID_TIMESTAMP_MSG('start date')).optional().matches(DATETIME_REGEX),
    check('end_date', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
];

const validateVerifyListingFields = [check('is_verified', INVALID_BOOLEAN_MSG('is_verified')).isBoolean()];
const validateSearchListingsFields = [
    query('keyword', INVALID_FIELD_MSG('keyword')).exists(),
    query('limit', INVALID_FIELD_MSG('limit')).optional().isNumeric(),
];

// map routes to controller
router
    .route('/')
    .get(advancedResults('listingsview'), getListings)
    .post(
        protect,
        uploadFile.array('pics', 5),
        mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
        validateCreateListingFields,
        checkInputError,
        createListing,
    );

router.route('/owner').get(getAllListingsOwnedByUser);
router.route('/search').get(validateSearchListingsFields, checkInputError, searchListings);
router.route('/all').get(protect, authorise('admin'), advancedResults('listings'), getListingsAll);

router.route('/:id').get(getListing);

router
    .route('/:id')
    .put(
        protect,
        authorise('user', 'admin'),
        uploadFile.array('pics', 5),
        mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
        validateUpdateListingFields,
        checkInputError,
        updateListing,
    )
    .delete(protect, deleteListing);

router.route('/:id/deactivate').put(protect, deactivateListing);

router
    .route('/:id/upload-photo')
    .put(
        protect,
        authorise('admin', 'user'),
        uploadFile.array('pics', 5),
        mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
        uploadListingPics,
    );

router.route('/:id/verify').put(protect, authorise('admin'), validateVerifyListingFields, checkInputError, verifyListing);
