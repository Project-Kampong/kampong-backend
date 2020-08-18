const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  protect,
  authorise,
  checkInputError,
} = require('../../middleware');
const {
  DATETIME_REGEX,
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  INVALID_TIMESTAMP_MSG,
} = require('../../utils');

// import controllers here
const {
  getMilestones,
  getMilestone,
  createMilestone,
  updateMilestone,
  deleteMilestone,
} = require('../../controllers/milestones');

// Define input validation chain
const validateCreateMilestoneFields = [
  check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
  check('description', INVALID_FIELD_MSG('description')).trim().notEmpty(),
  check('date', INVALID_TIMESTAMP_MSG('date'))
    .optional()
    .matches(DATETIME_REGEX),
];

const validateUpdateMilestoneFields = [
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
];

router.route('/').get(advancedResults('milestones'), getMilestones);
router.route('/:id').get(getMilestone);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(validateCreateMilestoneFields, checkInputError, createMilestone);

router
  .route('/:id')
  .put(validateUpdateMilestoneFields, checkInputError, updateMilestone)
  .delete(deleteMilestone);

module.exports = router;
