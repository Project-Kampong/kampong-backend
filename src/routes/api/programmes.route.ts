import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import { INVALID_FIELD_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// Import organisation controllers
import { getProgrammes, getProgramme, createProgramme, updateProgramme, deleteProgramme } from '../../controllers/programmes';

// Define input validation
const validateCreateProgrammeFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).notEmpty().isUUID(),
    check('programme_title', INVALID_FIELD_MSG('programme_title')).trim().notEmpty(),
];

const validateUpdateProgrammeFields = [
    oneOf([check('programme_title').exists(), check('about').exists(), check('media_url').exists()], NO_FIELD_UPDATED_MSG),
    check('programme_title', INVALID_FIELD_MSG('programme_title')).optional().trim().notEmpty(),
];

// Map public routes to controller
router.route('/').get(advancedResults('programme'), getProgrammes);

router.route('/:id').get(getProgramme);

// Use auth middleware
router.use(protect);

// Map routes to controller
router.route('/').post(validateCreateProgrammeFields, checkInputError, createProgramme);

router.route('/:id').put(validateUpdateProgrammeFields, checkInputError, updateProgramme).delete(deleteProgramme);
