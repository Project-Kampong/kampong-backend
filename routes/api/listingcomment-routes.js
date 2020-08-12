const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  INVALID_TIMESTAMP_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getListingComments,
  getListingComment,
  getListingCommentChildren,
  createListingComment,
  updateListingComment,
  deleteListingComment,
} = require('../../controllers/listingcomments');

router.route('/').get(advancedResults('listingcomments'), getListingComments);
router.route('/:id').get(getListingComment);
router.route('/:id/children').get(getListingCommentChildren);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('comment', INVALID_FIELD_MSG('comment')).trim().notEmpty(),
      check('reply_to_id', INVALID_TIMESTAMP_MSG('reply to id'))
        .optional()
        .isInt(),
    ],
    checkInputError,
    createListingComment
  );

router
  .route('/:id')
  .put(
    [
      oneOf([check('comment').exists()], NO_FIELD_UPDATED_MSG),
      check('comment', INVALID_FIELD_MSG('comment'))
        .optional()
        .trim()
        .notEmpty(),
    ],
    checkInputError,
    updateListingComment
  )
  .delete(deleteListingComment);

module.exports = router;
