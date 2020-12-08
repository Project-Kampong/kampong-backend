import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { db } from '../../database';
import { authorise, checkInputError, protect, asyncHandler } from '../../middleware';
import { INVALID_FIELD_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// Import controllers and initialise controller
import { OrganisationJobsController } from '../../controllers/organisationJobs';
const organisationJobsController = new OrganisationJobsController(db.organisationJobs, db.organisations);

// Validate inputs
const validateCreateOrganisationJobFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
    check('job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
    check('job_description', INVALID_FIELD_MSG('job description')).trim().notEmpty(),
];

const validateUpdateOrganisationJobFields = [
    oneOf([check('job_title').exists(), check('job_description').exists()], NO_FIELD_UPDATED_MSG),
    check('job_title', INVALID_FIELD_MSG('job title')).optional().trim().notEmpty(),
    check('job_description', INVALID_FIELD_MSG('job description')).optional().trim().notEmpty(),
];

router.route('/').get(asyncHandler(organisationJobsController.getOrganisationJobs));
router.route('/:organisationJobId').get(asyncHandler(organisationJobsController.getSingleOrganisationJob));

// Use authentication middleware for routes below
router.use(protect);

router.route('/').post(validateCreateOrganisationJobFields, checkInputError, asyncHandler(organisationJobsController.createOrganisationJob));

router.route('/:organisationJobId/deactivate').put(protect, asyncHandler(organisationJobsController.deactivateOrganisationJob));

router
    .route('/:organisationJobId')
    .put(validateUpdateOrganisationJobFields, checkInputError, asyncHandler(organisationJobsController.updateOrganisationJob))
    .delete(protect, authorise('admin'), asyncHandler(organisationJobsController.deleteOrganisationJob));
