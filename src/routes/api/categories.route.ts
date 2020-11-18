import express from 'express';
export const router = express.Router({ mergeParams: true });

import { getCategories } from '../../controllers/categories';
import { advancedResults } from '../../middleware';

// Include other resource's controllers to access their endpoints
import { router as listingsRoute } from './listings.route';

// Re-route this URI to other resource router
router.use('/:category_name/listings', listingsRoute);

router.route('/').get(advancedResults('category'), getCategories);
