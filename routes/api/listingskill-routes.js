const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const { INVALID_FIELD_MSG } = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getListingSkills,
  getListingSkill,
  createListingSkill,
  deleteListingSkill,
} = require('../../controllers/listingskills');

router
  .route('/')
  .get(
    advancedResults('listingskills', 'skills', 'skill_id'),
    getListingSkills
  );
router.route('/:id').get(getListingSkill);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('skill_id', INVALID_FIELD_MSG('skill id')).isInt(),
    ],
    checkInputError,
    createListingSkill
  );

router.route('/:id').delete(deleteListingSkill);

module.exports = router;
