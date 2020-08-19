const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
  authorise,
} = require('../../middleware');
const { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } = require('../../utils');

// import controllers here
const {
  getJobs,
  getJobsAll,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  deactivateJob,
} = require('../../controllers/jobs');

// Define input validation chain
const validateCreateJobFields = [
  check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
  check('job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
  check('job_description').optional().trim(),
];

const validateUpdateJobFields = [
  oneOf(
    [check('job_title').exists(), check('job_description').exists()],
    NO_FIELD_UPDATED_MSG
  ),
  check('job_title', INVALID_FIELD_MSG('job title'))
    .optional()
    .trim()
    .notEmpty(),
  check('job_description').optional().trim(),
];

router.route('/').get(advancedResults('jobsview'), getJobs);
router.route('/all').get(protect, advancedResults('jobs'), getJobsAll);
router.route('/:id').get(getJob);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(validateCreateJobFields, checkInputError, createJob);

router.route('/:id/deactivate').put(protect, deactivateJob);

router
  .route('/:id')
  .put(validateUpdateJobFields, checkInputError, updateJob)
  .delete(protect, deleteJob);

module.exports = router;
