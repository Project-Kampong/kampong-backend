const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  INVALID_TIMESTAMP_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getMilestones,
  getMilestone,
  createMilestone,
  updateMilestone,
  deleteMilestone,
} = require('../../controllers/milestones');
const { DATETIME_REGEX } = require('../../utils/regex');

router.route('/').get(advancedResults('milestones'), getMilestones);
router.route('/:id').get(getMilestone);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('description', INVALID_FIELD_MSG('description')).trim().notEmpty(),
      check('date', INVALID_TIMESTAMP_MSG('date'))
        .optional()
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    createMilestone
  );

router
  .route('/:id')
  .put(
    [
      oneOf(
        [check('description').exists(), check('date').exists()],
        NO_FIELD_UPDATED_MSG
      ),
      check('description', INVALID_FIELD_MSG('description'))
        .optional()
        .trim()
        .notEmpty(),
      check('date', INVALID_TIMESTAMP_MSG('date'))
        .optional()
        .matches(DATETIME_REGEX),
    ],
    checkInputError,
    updateMilestone
  )
  .delete(deleteMilestone);

module.exports = router;
