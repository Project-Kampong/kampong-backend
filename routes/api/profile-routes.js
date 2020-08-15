const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');

const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const { mapSingleFileLocation } = require('../../middleware/fileUploadHelper');
const { decodeHashedReqKey } = require('../../middleware/hashParamsDecoder');
const {
  INVALID_TIMESTAMP_MSG,
  INVALID_FIELD_MSG,
} = require('../../utils/inputExceptionMsg');
const { DATETIME_REGEX } = require('../../utils/regex');
const { uploadFile } = require('../../utils/fileUploader');

// import controllers here
const {
  getProfiles,
  getProfile,
  updateProfile,
  verifyProfile,
  uploadPic,
} = require('../../controllers/profiles');
const { NO_FIELD_UPDATED_MSG } = require('../../utils/inputExceptionMsg');

router.route('/raw').get(getProfile);

// Define input validation chain for routes
const validateProfileUpdateFields = [
  oneOf(
    [
      check('nickname').exists(),
      check('profile_picture').exists(),
      check('about').exists(),
      check('gender').exists(),
      check('dob').exists(),
      check('interest').exists(),
      check('phone').exists(),
      check('facebook_link').exists(),
      check('twitter_link').exists(),
      check('instagram_link').exists(),
      check('linkedin_link').exists(),
    ],
    NO_FIELD_UPDATED_MSG
  ),
  check('nickname', INVALID_FIELD_MSG('nickname')).optional().trim().notEmpty(),
  check('dob')
    .optional()
    .matches(DATETIME_REGEX)
    .withMessage(INVALID_TIMESTAMP_MSG('dob')),
  check('phone')
    .optional()
    .isMobilePhone('any')
    .withMessage(INVALID_FIELD_MSG('phone number')),
  check(['facebook_link', 'twitter_link', 'instagram_link', 'linkedin_link'])
    .optional()
    .isURL()
    .withMessage(INVALID_FIELD_MSG('URL')),
];

// map routes to controller
router
  .route('/')
  .get(
    decodeHashedReqKey('params.user_id'),
    getProfile,
    advancedResults('profiles'),
    getProfiles
  );

// all routes below uses protect middleware
router.use(protect);

// router takes merged params 'user_id' from user route
router
  .route('/')
  .put(
    authorise('admin', 'user'),
    validateProfileUpdateFields,
    checkInputError,
    decodeHashedReqKey('params.user_id'),
    updateProfile
  );

router
  .route('/raw')
  .put(
    authorise('admin', 'user'),
    validateProfileUpdateFields,
    checkInputError,
    updateProfile
  );

router
  .route('/upload-photo')
  .put(
    uploadFile.single('pic'),
    mapSingleFileLocation('profile_picture'),
    decodeHashedReqKey('params.user_id'),
    uploadPic
  );

router
  .route('/upload-photo/raw')
  .put(
    uploadFile.single('pic'),
    mapSingleFileLocation('profile_picture'),
    uploadPic
  );

router
  .route('/verify')
  .put(
    authorise('admin'),
    [check('is_verified', NO_FIELD_UPDATED_MSG).exists()],
    checkInputError,
    decodeHashedReqKey('params.user_id'),
    verifyProfile
  );

router
  .route('/verify/raw')
  .put(
    authorise('admin'),
    [check('is_verified', NO_FIELD_UPDATED_MSG).exists()],
    checkInputError,
    verifyProfile
  );

module.exports = router;
