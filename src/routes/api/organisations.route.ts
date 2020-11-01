import express from 'express';
export const router = express.Router();
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import {
    INVALID_URL_MSG,
    INVALID_PHONE_NUMBER_MSG,
    INVALID_EMAIL_MSG,
    INVALID_ALPHA_SPACE_MSG,
    NO_FIELD_UPDATED_MSG,
    INVALID_LOCATION_MSG,
} from '../../utils';

// Import organisation controllers
import { getOrganisations, getOrganisation, createOrganisation, updateOrganisation, deleteOrganisation } from '../../controllers/organisations';

// Import organisation's controllers
import { router as programmeRoute } from './programmes.route';

// Re-route this URI to other resource router
router.use('/:organisation_id/programmes', programmeRoute);

// Define input validation
const validateCreateOrganisationFields = [
    check('name', INVALID_ALPHA_SPACE_MSG('name')).trim().notEmpty(),
    check('organisation_type', INVALID_ALPHA_SPACE_MSG('organisation_type')).optional().trim(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).trim().notEmpty(),
    check('website_url', INVALID_URL_MSG).optional().trim().isURL(),
    check('phone', INVALID_PHONE_NUMBER_MSG).optional().trim().notEmpty(),
    check('email', INVALID_EMAIL_MSG).trim().notEmpty().isEmail().normalizeEmail(),
    check('locations', INVALID_LOCATION_MSG).optional(),
    check('story', INVALID_ALPHA_SPACE_MSG('story')).optional().trim(),
];

const validateUpdateOrganisationFields = [
    oneOf(
        [
            check('name').exists(),
            check('organisation_type').exists(),
            check('about').exists(),
            check('website_url').exists(),
            check('phone').exists(),
            check('email').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('name', INVALID_ALPHA_SPACE_MSG('name')).optional().trim().notEmpty(),
    check('organisation_type', INVALID_ALPHA_SPACE_MSG('organisation_type')).optional().trim(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).optional().trim().notEmpty(),
    check('website_url', INVALID_URL_MSG).optional().trim().isURL(),
    check('phone', INVALID_PHONE_NUMBER_MSG).optional().trim().notEmpty(),
    check('email', INVALID_EMAIL_MSG).optional().trim().notEmpty().isEmail().normalizeEmail(),
    check('locations', INVALID_LOCATION_MSG).optional(),
    check('story', INVALID_ALPHA_SPACE_MSG('story')).optional().trim(),
];

// Map public routes to controller
router.route('/').get(advancedResults('organisations'), getOrganisations);

router.route('/:id').get(getOrganisation);

// Use auth middleware
router.use(protect);

// Map routes to controller
router.route('/').post(validateCreateOrganisationFields, checkInputError, createOrganisation);

router.route('/:id').put(validateUpdateOrganisationFields, checkInputError, updateOrganisation).delete(deleteOrganisation);
