import express from 'express';
export const router = express.Router();

// Include other resource's controllers to access their endpoints
import { router as likesRoute } from './likes.route';
import { router as listingCommentsRoute } from './listingComments.route';
import { router as listingsRoute } from './listings.route';
import { router as participantsRoute } from './participants.route';
import { router as profilesRoute } from './profiles.route';
import { router as organisationRoute } from './organisations.route';

// Re-route this URI to other resource router
router.use('/profiles', profilesRoute);
router.use('/:user_id/likes', likesRoute);
router.use('/:user_id/listing-comments', listingCommentsRoute);
router.use('/:user_id/listings', listingsRoute);
router.use('/:user_id/participants', participantsRoute);
router.use('/:user_id/profiles', profilesRoute);
 