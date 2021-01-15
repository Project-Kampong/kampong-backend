import express from 'express';
export const router = express.Router({ mergeParams: true });
import { protect, asyncHandler } from '../../middleware';

// import controllers here
import { likesController } from '../../controllers/likes';

// Define input validation chain

router.route('/').get(asyncHandler(likesController.getLikes));

// all routes below only accessible to authenticated users
router.use(protect);

// map routes to controller
router.route('/').post(asyncHandler(likesController.newLike));

router.route('/:like_id').delete(asyncHandler(likesController.unLike));
