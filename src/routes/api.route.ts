import express from 'express';
export const router = express.Router();

import { router as authRoute } from './api/auth.route';
import { router as faqsRoute } from './api/faqs.route';
import { router as featuredListingsRoute } from './api/featuredListings.route';
import { router as hashtagsRoute } from './api/hashtags.route';
import { router as jobsRoute } from './api/job.route';
import { router as likesRoute } from './api/likes.route';
import { router as listingsRoute } from './api/listings.route';
import { router as listingCommentsRoute } from './api/listingComments.route';
import { router as listingLocationsRoute } from './api/listingLocations.route';
import { router as listingSkillsRoute } from './api/listingSkills.route';
import { router as listingUpdatesRoute } from './api/listingUpdates.route';
import { router as locationsRoute } from './api/locations.route';
import { router as milestonesRoute } from './api/milestones.route';
import { router as participantsRoute } from './api/participants.route';
import { router as skillsRoute } from './api/skills.route';
import { router as usersRoute } from './api/users.route';
import { router as uploadsRoute } from './api/uploads.route';
import { router as sendEmailRoute } from './api/sendEmail.route';

// Mount routes
router.use('/auth', authRoute);
router.use('/faqs', faqsRoute);
router.use('/featured-listings', featuredListingsRoute);
router.use('/hashtags', hashtagsRoute);
router.use('/jobs', jobsRoute);
router.use('/likes', likesRoute);
router.use('/listings', listingsRoute);
router.use('/listing-comments', listingCommentsRoute);
router.use('/listing-locations', listingLocationsRoute);
router.use('/listing-updates', listingUpdatesRoute);
router.use('/listing-skills', listingSkillsRoute);
router.use('/locations', locationsRoute);
router.use('/milestones', milestonesRoute);
router.use('/participants', participantsRoute);
router.use('/skills', skillsRoute);
router.use('/users', usersRoute);
router.use('/file-upload', uploadsRoute);
router.use('/send-email', sendEmailRoute);