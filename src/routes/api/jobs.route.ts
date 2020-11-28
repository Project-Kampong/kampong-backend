import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { db } from '../../database';
import { authorise, checkInputError, protect } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import and initialize controllers here
import { JobsController } from '../../controllers/jobs';
const jobsController = new JobsController(db.jobs, db.listings);

// Define input validation chain
const validateCreateJobFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
];

const validateUpdateJobFields = [
    oneOf([check('job_title').exists(), check('job_description').exists()], NO_FIELD_UPDATED_MSG),
    check('job_title', INVALID_FIELD_MSG('job title')).optional().trim().notEmpty(),
];

router.route('/').get(jobsController.getJobs);

// all routes below only accessible to authenticated users (and listing owner, to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateJobFields, checkInputError, jobsController.createJob);

router.route('/:id/deactivate').put(protect, jobsController.deactivateJob);

router
    .route('/:id')
    .put(validateUpdateJobFields, checkInputError, jobsController.updateJob)
    .delete(protect, authorise('admin'), jobsController.deleteJob);
