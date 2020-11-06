import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, checkInputError } from '../../middleware';
import { DATETIME_REGEX, INVALID_FIELD_MSG, INVALID_TIMESTAMP_MSG, NO_FIELD_UPDATED_MSG } from '../../utils';

// import controllers here
import { getParticipants, getParticipant, createParticipant, updateParticipant, deleteParticipant } from '../../controllers/participants';

// Define input validation chain
const validateCreateParticipantFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('user_id', INVALID_FIELD_MSG('user id')).isUUID(),
    check('joined_on', INVALID_TIMESTAMP_MSG('join date')).optional().matches(DATETIME_REGEX),
    check('end_on', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
];

const validateUpdateParticipantFields = [
    oneOf([check('joined_on').exists(), check('end_on').exists()], NO_FIELD_UPDATED_MSG),
    check('joined_on', INVALID_TIMESTAMP_MSG('join date')).optional().matches(DATETIME_REGEX),
    check('end_on', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
];

router.route('/').get(advancedResults('participants'), getParticipants);
router.route('/:participant_id').get(getParticipant);

// all routes below only accessible to admin, specifically, listing owner (to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateParticipantFields, checkInputError, createParticipant);

router.route('/:participant_id').put(validateUpdateParticipantFields, checkInputError, updateParticipant).delete(deleteParticipant);
