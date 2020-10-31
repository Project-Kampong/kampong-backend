import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, checkInputError, protect } from '../../middleware';
import { HASHTAG_REGEX, NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getHashtags, getHashtag, createHashtag, updateHashtag, deleteHashtag } from '../../controllers/hashtags';

// Define input validation chain
const validateCreateHashtagFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('tag', INVALID_FIELD_MSG('tag')).matches(HASHTAG_REGEX),
];

const validateUpdateHashtagFields = [
    oneOf([check('tag').exists()], NO_FIELD_UPDATED_MSG),
    check('tag', INVALID_FIELD_MSG('tag')).optional().matches(HASHTAG_REGEX),
];

router.route('/').get(advancedResults('hashtags'), getHashtags);
router.route('/:id').get(getHashtag);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateHashtagFields, checkInputError, createHashtag);

router.route('/:id').put(validateUpdateHashtagFields, checkInputError, updateHashtag).delete(deleteHashtag);
