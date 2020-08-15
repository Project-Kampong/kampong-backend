const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
} = require('../../middleware');
const { INVALID_FIELD_MSG } = require('../../utils');

// import controllers here
const {
  getLikes,
  getLike,
  newLike,
  unLike,
} = require('../../controllers/likes');

// Define input validation chain
const validateNewLikeFields = [
  check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
];

router.route('/').get(advancedResults('likes'), getLikes);
router.route('/:like_id').get(getLike);

// all routes below only accessible to authenticated users
router.use(protect);

// map routes to controller
router.route('/').post(validateNewLikeFields, checkInputError, newLike);

router.route('/:like_id').delete(unLike);

module.exports = router;
