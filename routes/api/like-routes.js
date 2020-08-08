const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const { INVALID_FIELD_MSG } = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getLikes,
  getLike,
  newLike,
  unLike,
} = require('../../controllers/likes');

router.route('/').get(advancedResults('likes'), getLikes);
router.route('/:like_id').get(getLike);

// all routes below only accessible to authenticated users
router.use(protect);

// map routes to controller
router
  .route('/')
  .post(
    [check('listing_id', INVALID_FIELD_MSG('listing id')).isInt()],
    checkInputError,
    newLike
  );

router.route('/:like_id').delete(unLike);

module.exports = router;
