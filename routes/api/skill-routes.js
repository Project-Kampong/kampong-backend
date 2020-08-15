const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const {
  advancedResults,
  protect,
  authorise,
  checkInputError,
} = require('../../middleware');
const {
  ALPHA_WHITESPACE_REGEX,
  INVALID_ALPHA_SPACE_MSG,
  NO_FIELD_UPDATED_MSG,
} = require('../../utils');

// import controllers here
const {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../../controllers/skills');

// Define input validation chain
const validateCreateSkillFields = [
  check('skill', INVALID_ALPHA_SPACE_MSG('skill'))
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX),
];

const validateUpdateSkillFields = [
  check('skill', NO_FIELD_UPDATED_MSG)
    .trim()
    .notEmpty()
    .matches(ALPHA_WHITESPACE_REGEX)
    .withMessage(INVALID_ALPHA_SPACE_MSG('skill')),
];

router.route('/').get(advancedResults('skills'), getSkills);
router.route('/:id').get(getSkill);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('admin'));

// map routes to controller
router.route('/').post(validateCreateSkillFields, checkInputError, createSkill);

router
  .route('/:id')
  .put(validateUpdateSkillFields, checkInputError, updateSkill)
  .delete(deleteSkill);

module.exports = router;
