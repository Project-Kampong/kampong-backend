const express = require('express');
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const router = express.Router();

// Include other resource's controllers to access their endpoints
const skillRoute = require('./skill-routes');

// Re-route this URI to other resource router
router.use('/:profileId/skills', skillRoute);

// import controllers here
const {
    getProfiles,
    getProfile,
    updateProfile,
    verifyProfile
  } = require('../controllers/profiles');
const { NO_FIELD_UPDATED_MSG } = require('../utils/inputExceptionMsg');
  
// map routes to controller
router
  .route('/')
  .get(advancedResults('profiles'), getProfiles);

router
  .route('/:id')
  .get(getProfile)
  
router.use(protect);

router
  .route('/:id')
  .put(
    [
      oneOf(
        [
          check('profile_picture').exists(),
          check('about').exists(),
          check('interest').exists(),
          check('phone').exists(),
          check('facebook_link').exists(),
          check('twitter_link').exists(),
          check('instagram_link').exists(),
          check('linkedin_link').exists(),
          check('is_verified').exists()
        ],
        NO_FIELD_UPDATED_MSG
      )
    ],
    checkInputError,
    updateProfile,
  )

router.use(authorise('admin'));

router
    .route('/:id')
    .put(
      [
        check('is_verified', NO_FIELD_UPDATED_MSG).exists()
      ],
    checkInputError,
    verifyProfile
    )

module.exports = router;
