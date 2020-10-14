import express from 'express';
export const router = express.Router();
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import {
    INVALID_FIELD_MSG,
    INVALID_URL_MSG,
    INVALID_PHONE_NUMBER_MSG,
    INVALID_EMAIL_MSG,
    INVALID_ALPHA_SPACE_MSG,
    NO_FIELD_UPDATED_MSG,
} from '../../utils';

// Import organisation controllers
import {
    getProgrammes,
    getProgramme,
    getOrganisationProgrammes,
    getOrganisationProgramme,
    createProgramme,
    updateProgramme,
    deleteProgramme
} from '../../controllers/programmes';

// Define input validation
const validateCreateProgrammeFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).notEmpty().isInt(),
    check('title', INVALID_FIELD_MSG('title')).trim().notEmpty(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).trim().notEmpty(),
    check('media_url', INVALID_URL_MSG).optional().trim().isURL()
];

const validateUpdateProgrammeFields = [
    oneOf([
        check('organisation_id').exists(),
        check('title').exists(),
        check('about').exists(),
        check('media_url').exists()], NO_FIELD_UPDATED_MSG),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).optional().isInt(),
    check('title', INVALID_FIELD_MSG('title')).optional().trim(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).optional().trim(),
    check('media_url', INVALID_URL_MSG).optional().trim().isURL()
];

// Map public routes to controller
router
    .route('/')
    .get(advancedResults('programmes'), getProgrammes);

router
    .route('/:id')
    .get(getProgramme);

// Use auth middleware
router.use(protect);

// Map routes to controller
router
    .route('/all')
    .get(getOrganisationProgrammes);

router
    .route('/:id')
    .get(getOrganisationProgramme);

router
    .route('/')
    .post(validateCreateProgrammeFields, checkInputError, createProgramme);

router
    .route('/:id')
    .put(validateUpdateProgrammeFields, checkInputError, updateProgramme)
    .delete(deleteProgramme);
