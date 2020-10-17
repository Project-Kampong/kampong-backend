import express from 'express';
export const router = express.Router();

import { router as authRoute } from './api/auth-routes';
import { router as faqRoute } from './api/faq-routes';
import { router as featuredListingRoute } from './api/featuredlisting-routes';
import { router as hashtagRoute } from './api/hashtag-routes';
import { router as jobRoute } from './api/job-routes';
import { router as likeRoute } from './api/like-routes';
import { router as listingRoute } from './api/listing-routes';
import { router as listingCommentRoute } from './api/listingcomment-routes';
import { router as listingLocationRoute } from './api/listinglocation-routes';
import { router as listingSkillRoute } from './api/listingskill-routes';
import { router as listingUpdateRoute } from './api/listingupdate-routes';
import { router as locationRoute } from './api/location-routes';
import { router as milestoneRoute } from './api/milestone-routes';
import { router as participantRoute } from './api/participant-routes';
import { router as skillRoute } from './api/skill-routes';
import { router as userRoute } from './api/user-routes';
import { router as uploadRoute } from './api/upload-routes';
import { router as sendEmailRoute } from './api/sendemail-routes';
import { router as programmeRoute } from './api/programme-routes';
import { router as organisationRoute } from './api/organisation-routes';

// Mount routes
router.use('/auth', authRoute);
router.use('/faqs', faqRoute);
router.use('/featured-listings', featuredListingRoute);
router.use('/hashtags', hashtagRoute);
router.use('/jobs', jobRoute);
router.use('/likes', likeRoute);
router.use('/listings', listingRoute);
router.use('/listing-comments', listingCommentRoute);
router.use('/listing-locations', listingLocationRoute);
router.use('/listing-updates', listingUpdateRoute);
router.use('/listing-skills', listingSkillRoute);
router.use('/locations', locationRoute);
router.use('/milestones', milestoneRoute);
router.use('/participants', participantRoute);
router.use('/skills', skillRoute);
router.use('/users', userRoute);
router.use('/file-upload', uploadRoute);
router.use('/send-email', sendEmailRoute);
router.use('/programmes', programmeRoute);
router.use('/organisations', organisationRoute)
