import express from 'express';
export const router = express.Router({ mergeParams: true });
import { asyncHandler, protect } from '../../middleware';

// import controller
import { hashtagsController } from '../../controllers/hashtags';

router.route('/').get(asyncHandler(hashtagsController.getHashtagsForListing));

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(asyncHandler(hashtagsController.createHashtag));

router.route('/:id').delete(asyncHandler(hashtagsController.deleteHashtag));
