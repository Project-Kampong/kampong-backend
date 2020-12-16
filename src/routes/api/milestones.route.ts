import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { protect, checkInputError } from '../../middleware';
import { DATETIME_REGEX, NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG, INVALID_TIMESTAMP_MSG } from '../../utils';

// import controllers here
import { getMilestonesForListing, createMilestone, updateMilestone, deleteMilestone } from '../../controllers/milestones';

// Define input validation chain
const validateCreateMilestoneFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('milestone_description', INVALID_FIELD_MSG('milestone_description')).trim().notEmpty(),
    check('date', INVALID_TIMESTAMP_MSG('date')).optional().matches(DATETIME_REGEX),
];

const validateUpdateMilestoneFields = [
    oneOf([check('milestone_description').exists(), check('date').exists()], NO_FIELD_UPDATED_MSG),
    check('milestone_description', INVALID_FIELD_MSG('milestone description')).optional().trim().notEmpty(),
    check('date', INVALID_TIMESTAMP_MSG('date')).optional().matches(DATETIME_REGEX),
];

router.route('/').get(getMilestonesForListing);

// all routes below only accessible to authenticated user, specifically, listing owner (to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateMilestoneFields, checkInputError, createMilestone);

router.route('/:id').put(validateUpdateMilestoneFields, checkInputError, updateMilestone).delete(deleteMilestone);
