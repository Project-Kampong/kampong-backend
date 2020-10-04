import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { advancedResults, protect, authorise, checkInputError } from '../../middleware';
import { INVALID_FIELD_MSG, ALPHA_WHITESPACE_REGEX, INVALID_ALPHA_SPACE_MSG } from '../../utils';

// import controllers here
import { getListingSkills, getListingSkill, createListingSkill, deleteListingSkill, createCustomListingSkill } from '../../controllers/listingskills';

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
