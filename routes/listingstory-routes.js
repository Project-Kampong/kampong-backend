const express = require('express');
const router = express.Router();
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
} = require('../utils/inputExceptionMsg');

// import controllers here
const {
  getListingStories,
  getListingStory,
  updateListingStory,
} = require('../controllers/listingstories');

// map routes to controller
router.route('/').get(advancedResults('listingstories'), getListingStories);

router
  .route('/:id')
  .get(getListingStory)
  .put(
    protect,
    authorise('user', 'admin'),
    [
      oneOf(
        [
          check('problem').exists(),
          check('solution').exists(),
          check('outcome').exists(),
        ],
        NO_FIELD_UPDATED_MSG
      ),
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
