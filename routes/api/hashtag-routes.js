const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
  authorise,
} = require('../../middleware');
const {
  HASHTAG_REGEX,
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
} = require('../../utils');

// import controllers here
const {
  getHashtags,
  getHashtag,
  createHashtag,
  updateHashtag,
  deleteHashtag,
} = require('../../controllers/hashtags');

router.route('/').get(advancedResults('hashtags'), getHashtags);
router.route('/:id').get(getHashtag);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('tag', INVALID_FIELD_MSG('tag')).matches(HASHTAG_REGEX),
    ],
    checkInputError,
    createHashtag
  );

router
  .route('/:id')
  .put(
    [
      oneOf([check('tag').exists()], NO_FIELD_UPDATED_MSG),
      check('tag', INVALID_FIELD_MSG('tag')).optional().matches(HASHTAG_REGEX),
    ],
    checkInputError,
    updateHashtag
  )
  .delete(deleteHashtag);

module.exports = router;
