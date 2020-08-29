const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const { advancedResults, protect, authorise, checkInputError } = require('../../middleware');
const { INVALID_FIELD_MSG, ALPHA_WHITESPACE_REGEX, INVALID_ALPHA_SPACE_MSG } = require('../../utils');

// import controllers here
const {
    getListingSkills,
    getListingSkill,
    createListingSkill,
    deleteListingSkill,
    createCustomListingSkill,
} = require('../../controllers/listingskills');

// Define input validation chain
const validateCreateListingSkill = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('skill_id', INVALID_FIELD_MSG('skill id')).isInt(),
];

const validateCustomSkill = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('skill', INVALID_ALPHA_SPACE_MSG('skill')).trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('skill_description', INVALID_ALPHA_SPACE_MSG('skill description')).optional().trim(),
];

router.route('/').get(advancedResults('listingskills', 'skills', 'skill_id'), getListingSkills);
router.route('/:id').get(getListingSkill);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(validateCreateListingSkill, checkInputError, createListingSkill);

router.route('/:id').delete(deleteListingSkill);

router.route('/add-skill').post(validateCustomSkill, checkInputError, createCustomListingSkill);

module.exports = router;
