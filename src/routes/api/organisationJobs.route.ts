import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { authorise, checkInputError, protect, asyncHandler } from '../../middleware';
import { INVALID_FIELD_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// Import controller
import { organisationJobsController } from '../../controllers/organisationJobs';

// Validate inputs
const validateCreateOrganisationJobFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
    check('organisation_job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
    check('organisation_job_description', INVALID_FIELD_MSG('job description')).trim().notEmpty(),
];

const validateUpdateOrganisationJobFields = [
    oneOf([check('job_title').exists(), check('job_description').exists()], NO_FIELD_UPDATED_MSG),
    check('organisation_job_title', INVALID_FIELD_MSG('job title')).optional().trim().notEmpty(),
    check('organisation_job_description', INVALID_FIELD_MSG('job description')).optional().trim().notEmpty(),
];

router.route('/').get(asyncHandler(organisationJobsController.getOrganisationJobs));

// Use authentication middleware for routes below
router.use(protect);

router.route('/').post(validateCreateOrganisationJobFields, checkInputError, asyncHandler(organisationJobsController.createOrganisationJob));

router
    .route('/:organisationJobId')
    .put(validateUpdateOrganisationJobFields, checkInputError, asyncHandler(organisationJobsController.updateOrganisationJob))
    .delete(protect, authorise('admin'), asyncHandler(organisationJobsController.deleteOrganisationJob));
