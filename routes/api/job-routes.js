const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const advancedResults = require('../../middleware/advancedResults');
const { protect, authorise } = require('../../middleware/auth');
const { checkInputError } = require('../../middleware/inputValidation');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
} = require('../../utils/inputExceptionMsg');

// import controllers here
const {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../../controllers/jobs');

router.route('/').get(advancedResults('jobs'), getJobs);
router.route('/:id').get(getJob);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('job_title', INVALID_FIELD_MSG('job title')).trim().notEmpty(),
      check('job_description').optional().trim(),
    ],
    checkInputError,
    createJob
  );

router
  .route('/:id')
  .put(
    [
      oneOf(
        [check('job_title').exists(), check('job_description').exists()],
        NO_FIELD_UPDATED_MSG
      ),
      check('job_title', INVALID_FIELD_MSG('job title'))
        .optional()
        .trim()
        .notEmpty(),
      check('job_description').optional().trim(),
    ],
    checkInputError,
    updateJob
  )
  .delete(deleteJob);

module.exports = router;
