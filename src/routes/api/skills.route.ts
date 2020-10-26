import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, authorise, checkInputError } from '../../middleware';
import { ALPHA_WHITESPACE_REGEX, INVALID_ALPHA_SPACE_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// import controllers here
import { getSkills, getSkill, createSkill, updateSkill, deleteSkill } from '../../controllers/skills';

// Define input validation chain
const validateCreateSkillFields = [
    check(['skill', 'skill_group'], INVALID_ALPHA_SPACE_MSG('skill')).trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('skill_description', INVALID_ALPHA_SPACE_MSG('skill description')).optional().trim(),
];

const validateUpdateSkillFields = [
    oneOf([check('skill').exists(), check('skill_group').exists(), check('skill_description').exists()], NO_FIELD_UPDATED_MSG),
    check(['skill', 'skill_group'], INVALID_ALPHA_SPACE_MSG('skill')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('skill_description', INVALID_ALPHA_SPACE_MSG('skill description')).optional().trim(),
];

router.route('/').get(advancedResults('skills'), getSkills);
router.route('/:id').get(getSkill);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('admin'));

// map routes to controller
router.route('/').post(validateCreateSkillFields, checkInputError, createSkill);

router.route('/:id').put(validateUpdateSkillFields, checkInputError, updateSkill).delete(deleteSkill);
