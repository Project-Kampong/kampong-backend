const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const { DATETIME_REGEX } = require('../utils/regex');
const {
  INVALID_FIELD_MSG,
  INVALID_TIMESTAMP_MSG,
  NO_FIELD_UPDATED_MSG,
} = require('../utils/inputExceptionMsg');

// import controllers here
const {
  getParticipants,
  getParticipant,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} = require('../controllers/participants');

router.route('/').get(advancedResults('participants'), getParticipants);
router.route('/listings/:listing_id/users/:user_id').get(getParticipant);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing_id')).isInt(),
      check('user_id', INVALID_FIELD_MSG('user_id')).isInt(),
      check('joined_on', INVALID_TIMESTAMP_MSG('join date'))
        .optional()
        .matches(DATETIME_REGEX),
      check('end_on', INVALID_TIMESTAMP_MSG('end date'))
        .optional()
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    createParticipant
  );

router
  .route('/listings/:listing_id/users/:user_id')
  .put(
    [
      oneOf(
        [check('joined_on').exists(), check('end_on').exists()],
        NO_FIELD_UPDATED_MSG
      ),
      check('joined_on', INVALID_TIMESTAMP_MSG('join date'))
        .optional()
        .matches(DATETIME_REGEX),
      check('end_on', INVALID_TIMESTAMP_MSG('end date'))
        .optional()
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    updateParticipant
  )
  .delete(deleteParticipant);

module.exports = router;
