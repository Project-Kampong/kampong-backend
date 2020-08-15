const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
} = require('../../middleware');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getListingStories,
  getListingStory,
  updateListingStory,
} = require('../../controllers/listingstories');

// All routes below use mergedParams from listings route
router
  .route('/')
  .get(getListingStory, advancedResults('listingstories'), getListingStories)
  .put(
    protect,
    [
      oneOf(
        [
          check('overview').exists(),
          check('problem').exists(),
          check('solution').exists(),
          check('outcome').exists(),
        ],
        NO_FIELD_UPDATED_MSG
      ),
      check('overview', INVALID_FIELD_MSG('overview'))
        .optional()
        .trim()
        .notEmpty(),
      check('problem', INVALID_FIELD_MSG('problem'))
        .optional()
        .trim()
        .notEmpty(),
      check('solution', INVALID_FIELD_MSG('solution'))
        .optional()
        .trim()
        .notEmpty(),
      check('outcome', INVALID_FIELD_MSG('outcome'))
        .optional()
        .trim()
        .notEmpty(),
    ],
    checkInputError,
    updateListingStory
  );

module.exports = router;
