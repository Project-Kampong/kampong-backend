import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { checkInputError, protect, asyncHandler } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { likeController } from '../../controllers/likes';

// Define input validation chain
const validateNewLikeFields = [check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID()];

router.route('/').get(asyncHandler(likeController.getLikes));

// all routes below only accessible to authenticated users
router.use(protect);

// map routes to controller
router.route('/').post(validateNewLikeFields, checkInputError, asyncHandler(likeController.newLike));

router.route('/:like_id').delete(asyncHandler(likeController.unLike));
