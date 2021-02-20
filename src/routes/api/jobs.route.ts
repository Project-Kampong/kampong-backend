import express from 'express';
export const router = express.Router({ mergeParams: true });
import { asyncHandler, protect } from '../../middleware';

// import controller
import { jobsController } from '../../controllers/jobs';

router.route('/').get(asyncHandler(jobsController.getJobs));

// all routes below only accessible to authenticated users (and listing owner, to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(asyncHandler(jobsController.createJob));

router.route('/:id').put(jobsController.updateJob).delete(protect, asyncHandler(jobsController.deleteJob));
