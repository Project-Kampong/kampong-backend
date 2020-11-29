import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { protect, checkInputError } from '../../middleware';
import { DATETIME_REGEX, INVALID_FIELD_MSG, INVALID_TIMESTAMP_MSG } from '../../utils';

// import controllers here
import { getParticipants, createParticipant, deleteParticipant } from '../../controllers/participants';

// Define input validation chain
const validateCreateParticipantFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('user_id', INVALID_FIELD_MSG('user id')).isUUID(),
    check('joined_on', INVALID_TIMESTAMP_MSG('join date')).optional().matches(DATETIME_REGEX),
    check('end_on', INVALID_TIMESTAMP_MSG('end date')).optional().matches(DATETIME_REGEX),
];

router.route('/').get(getParticipants);

// all routes below only accessible to admin, specifically, listing owner (to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateParticipantFields, checkInputError, createParticipant);

router.route('/:participant_id').delete(deleteParticipant);
