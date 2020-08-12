const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const { ALPHA_WHITESPACE_REGEX } = require('../../utils/regex');
const {
  INVALID_ALPHA_SPACE_MSG,
  NO_FIELD_UPDATED_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
} = require('../../controllers/skills');

router.route('/').get(advancedResults('skills'), getSkills);
router.route('/:id').get(getSkill);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('skill', INVALID_ALPHA_SPACE_MSG('skill'))
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX),
    ],
    checkInputError,
    createSkill
  );

router
  .route('/:id')
  .put(
    [
      check('skill', NO_FIELD_UPDATED_MSG)
        .trim()
        .notEmpty()
        .matches(ALPHA_WHITESPACE_REGEX)
        .withMessage(INVALID_ALPHA_SPACE_MSG('skill')),
    ],
    checkInputError,
    updateSkill
  )
  .delete(deleteSkill);

module.exports = router;
