import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { db } from '../../database';
import { authorise, checkInputError, protect } from '../../middleware';
import { INVALID_FIELD_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// Import controllers and initialise controller
import { OrganisationJobsController } from '../../controllers/organisationJobs';
const organisationJobsController = new OrganisationJobsController(db.organisationJobs, db.organisations);

// Validate inputs
const validateCreateOrganisationJobFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
    check('organisation_job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
    check('organisation_job_description', INVALID_FIELD_MSG('job description')).trim().notEmpty()
]

const validateUpdateOrganisationJobFields = [
    oneOf([check('organisation_job_title').exists(), check('organisation_job_description').exists()], NO_FIELD_UPDATED_MSG),
    check('organisation_job_title', INVALID_FIELD_MSG('job title')).optional().trim().notEmpty(),
    check('organisation_job_description', INVALID_FIELD_MSG('job description')).optional().trim().notEmpty()
]

router.route('/').get(organisationJobsController.getOrganisationJobs);
router.route('/:organisationJobId').get(organisationJobsController.getSingleOrganisationJob);

// Use authentication middleware for routes below
router.use(protect);

router.route('/').post(validateCreateOrganisationJobFields, checkInputError, organisationJobsController.createOrganisationJob);

router.route('/:organisationJobId/deactivate').put(protect, organisationJobsController.deactivateOrganisationJob);

router
    .route('/:id')
    .put(validateUpdateOrganisationJobFields, checkInputError, organisationJobsController.updateOrganisationJob)
    .delete(protect, authorise('admin'), organisationJobsController.deleteOrganisationJob);
