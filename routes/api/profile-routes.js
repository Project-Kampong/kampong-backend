const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
  authorise,
  mapSingleFileLocation,
} = require('../../middleware');
const {
  DATETIME_REGEX,
  INVALID_TIMESTAMP_MSG,
  INVALID_FIELD_MSG,
  NO_FIELD_UPDATED_MSG,
  uploadFile,
} = require('../../utils');

// import controllers here
const {
  getProfiles,
  getProfile,
  getProfileByHashId,
  updateProfile,
  verifyProfile,
  uploadPic,
} = require('../../controllers/profiles');

// map routes to controller
router
  .route('/')
  .get(getProfileByHashId, advancedResults('profiles'), getProfiles);

router.route('/raw').get(getProfile);

// all routes below uses protect middleware
router.use(protect);

// router takes merged params 'user_id' from user route
router
  .route('/')
  .put(
    authorise('admin', 'user'),
    [
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
      check('nickname', INVALID_FIELD_MSG('nickname'))
        .optional()
        .trim()
        .notEmpty(),
      check('dob')
        .optional()
        .matches(DATETIME_REGEX)
        .withMessage(INVALID_TIMESTAMP_MSG('dob')),
      check('phone')
        .optional()
        .isMobilePhone('any')
        .withMessage(INVALID_FIELD_MSG('phone number')),
      check([
        'facebook_link',
        'twitter_link',
        'instagram_link',
        'linkedin_link',
      ])
        .optional()
        .isURL()
        .withMessage(INVALID_FIELD_MSG('URL')),
    ],
    checkInputError,
    updateProfile
  );

router
  .route('/upload-photo')
  .put(
    authorise('admin', 'user'),
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
    verifyProfile
  );

module.exports = router;
