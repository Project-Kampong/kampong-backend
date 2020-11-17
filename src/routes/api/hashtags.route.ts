import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { checkInputError, protect } from '../../middleware';
import { HASHTAG_REGEX, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getHashtagsForListing, createHashtag, deleteHashtag } from '../../controllers/hashtags';

// Define input validation chain
const validateCreateHashtagFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('tag', INVALID_FIELD_MSG('tag')).matches(HASHTAG_REGEX),
];

router.route('/').get(getHashtagsForListing);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateHashtagFields, checkInputError, createHashtag);

router.route('/:id').delete(deleteHashtag);
