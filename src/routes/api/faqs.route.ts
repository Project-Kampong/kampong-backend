import express from 'express';
export const router = express.Router({ mergeParams: true });
import { protect, authorise, asyncHandler } from '../../middleware';

// import controller
import { faqsController } from '../../controllers/faqs';

router.route('/').get(asyncHandler(faqsController.getFaqsForListing));

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(asyncHandler(faqsController.createFaq));

router.route('/:id').put(asyncHandler(faqsController.updateFaq)).delete(asyncHandler(faqsController.deleteFaq));
