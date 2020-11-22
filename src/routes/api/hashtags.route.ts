import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { db } from '../../database';
import { asyncHandler, checkInputError, protect } from '../../middleware';
import { HASHTAG_REGEX, INVALID_FIELD_MSG } from '../../utils';

// import and initialize controllers here
import { HashtagsController } from '../../controllers/hashtags';
const hashtagsController = new HashtagsController(db.hashtags, db.listings);

// Define input validation chain
const validateCreateHashtagFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('tag', INVALID_FIELD_MSG('tag')).matches(HASHTAG_REGEX),
];

router.route('/').get(asyncHandler(hashtagsController.getHashtagsForListing));

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateHashtagFields, checkInputError, asyncHandler(hashtagsController.createHashtag));

router.route('/:id').delete(asyncHandler(hashtagsController.deleteHashtag));
