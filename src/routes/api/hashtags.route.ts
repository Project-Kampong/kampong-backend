import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { db } from '../../database';
import { advancedResults, checkInputError, protect } from '../../middleware';
import { HASHTAG_REGEX, INVALID_FIELD_MSG } from '../../utils';

// import and initialize controllers here
import { HashtagsController } from '../../controllers/hashtags';
const hashtagsController = new HashtagsController(db.hashtags, db.listings);

// Define input validation chain
const validateCreateHashtagFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('tag', INVALID_FIELD_MSG('tag')).matches(HASHTAG_REGEX),
];

router.route('/').get(advancedResults('hashtags'), hashtagsController.getHashtags);
router.route('/:id').get(hashtagsController.getHashtag);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateHashtagFields, checkInputError, hashtagsController.createHashtag);

router.route('/:id').delete(hashtagsController.deleteHashtag);
