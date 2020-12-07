import express from 'express';
import { asyncHandler } from '../../middleware';
export const router = express.Router({ mergeParams: true });

import { categoriesController } from '../../controllers/categories';

// Include other resource's controllers to access their endpoints
import { router as listingsRoute } from './listings.route';

// Re-route this URI to other resource router
router.use('/:category_name/listings', listingsRoute);

router.route('/').get(asyncHandler(categoriesController.getCategories));
