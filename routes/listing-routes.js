const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const { mapFilenameToLocation } = require('../middleware/fileUploadHelper');
const { DATETIME_REGEX } = require('../utils/regex');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  INVALID_BOOLEAN_MSG,
  INVALID_TIMESTAMP_MSG,
} = require('../utils/inputExceptionMsg');
const { uploadFile } = require('../utils/fileUploader');

// import controllers here
const {
  getListings,
  getListingsAll,
  getListing,
  getListingByHashId,
  createListing,
  updateListing,
  verifyListing,
  deleteListing,
  deactivateListing,
  uploadListingPics,
} = require('../controllers/listings');

// Include other resource's controllers to access their endpoints
const faqRoute = require('./faq-routes');
const hashtagRoute = require('./hashtag-routes');
const likeRoute = require('./like-routes');
const listingUpdateRoute = require('./listingupdate-routes');
const milestoneRoute = require('./milestone-routes');
const participantRoute = require('./participant-routes');
const listingSkillRoute = require('./listingskill-routes');
const jobRoute = require('./job-routes');
const storyRoute = require('./listingstory-routes');

// Re-route this URI to other resource router
router.use('/stories', storyRoute);
router.use('/:listing_id/faqs', faqRoute);
router.use('/:listing_id/hashtags', hashtagRoute);
router.use('/:listing_id/likes', likeRoute);
router.use('/:listing_id/listing-updates', listingUpdateRoute);
router.use('/:listing_id/milestones', milestoneRoute);
router.use('/:listing_id/participants', participantRoute);
router.use('/:listing_id/listing-skills', listingSkillRoute);
router.use('/:listing_id/jobs', jobRoute);

// map routes to controller
router
  .route('/')
  .get(advancedResults('listingsview'), getListings)
  .post(
    protect,
    uploadFile.array('pics', 5),
    mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
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
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    createListing
  );

router.route('/all').get(protect, authorise('admin'), advancedResults('listings'), getListingsAll);
router.route('/:id/raw').get(getListing);
router.route('/:hashId').get(getListingByHashId);

router
  .route('/:id')
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
          check('is_published').exists(),
          check('start_date').exists(),
          check('end_date').exists(),
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
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    updateListing
  )
  .delete(protect, deleteListing);

router
  .route('/:id/deactivate')
  .put(
    protect,
    authorise('admin', 'owner'),
    deactivateListing
  );

router
  .route('/:id/photo')
  .put(
    protect,
    authorise('admin', 'user'),
    uploadFile.array('pics', 5),
    mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
    uploadListingPics
  );

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
