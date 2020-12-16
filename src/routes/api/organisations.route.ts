import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import { INVALID_PHONE_NUMBER_MSG, INVALID_EMAIL_MSG, INVALID_ALPHA_SPACE_MSG, NO_FIELD_UPDATED_MSG, INVALID_LOCATION_MSG } from '../../utils';

// Import organisation controllers
import { getOrganisations, getOrganisation, createOrganisation, updateOrganisation, deleteOrganisation } from '../../controllers/organisations';

// Import other controllers
import { router as programmeRoute } from './programmes.route';
import { router as listingsRoute } from './listings.route';
import { router as organisationJobsRoute } from './organisationJobs.route';

// Re-route this URI to other resource router
router.use('/:organisation_id/programmes', programmeRoute);
router.use('/:organisation_id/listings', listingsRoute);
router.use('/:organisation_id/organisation-jobs', organisationJobsRoute);

// Define input validation
const validateCreateOrganisationFields = [
    check('name', INVALID_ALPHA_SPACE_MSG('name')).trim().notEmpty(),
    check('organisation_type', INVALID_ALPHA_SPACE_MSG('organisation_type')).optional().trim(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).trim().notEmpty(),
    check('phone', INVALID_PHONE_NUMBER_MSG).optional().trim().notEmpty(),
    check('email', INVALID_EMAIL_MSG).trim().notEmpty().isEmail().normalizeEmail(),
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
            check('address').exists(),
            check('locations').exists(),
            check('story').exists(),
            check('facebook_link').exists(),
            check('twitter_link').exists(),
            check('instagram_link').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('name', INVALID_ALPHA_SPACE_MSG('name')).optional().trim().notEmpty(),
    check('organisation_type', INVALID_ALPHA_SPACE_MSG('organisation_type')).optional().trim(),
    check('about', INVALID_ALPHA_SPACE_MSG('about')).optional().trim().notEmpty(),
    check('phone', INVALID_PHONE_NUMBER_MSG).optional().trim().notEmpty(),
    check('email', INVALID_EMAIL_MSG).optional().trim().notEmpty().isEmail().normalizeEmail(),
];

// Map public routes to controller
router.route('/').get(advancedResults('organisation'), getOrganisations);

router.route('/:id').get(getOrganisation);

// Use auth middleware
router.use(protect);

// Map routes to controller
router.route('/').post(validateCreateOrganisationFields, checkInputError, createOrganisation);

router.route('/:id').put(validateUpdateOrganisationFields, checkInputError, updateOrganisation).delete(deleteOrganisation);
