import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, checkInputError, protect, authorise } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getJobs, getJobsAll, getJob, createJob, updateJob, deleteJob, deactivateJob } from '../../controllers/jobs';

// Define input validation chain
const validateCreateJobFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
    check('job_description').optional().trim(),
];

const validateUpdateJobFields = [
    oneOf([check('job_title').exists(), check('job_description').exists()], NO_FIELD_UPDATED_MSG),
    check('job_title', INVALID_FIELD_MSG('job title')).optional().trim().notEmpty(),
    check('job_description').optional().trim(),
];

router.route('/').get(advancedResults('jobsview'), getJobs);
router.route('/all').get(protect, advancedResults('jobs'), getJobsAll);
router.route('/:id').get(getJob);

// all routes below only accessible to authenticated users (and listing owner, to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateJobFields, checkInputError, createJob);

router.route('/:id/deactivate').put(protect, deactivateJob);

router.route('/:id').put(validateUpdateJobFields, checkInputError, updateJob).delete(protect, deleteJob);
