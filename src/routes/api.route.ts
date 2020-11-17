import express from 'express';
export const apiRouter = express.Router();

import { router as authRoute } from './api/auth.route';
import { router as faqsRoute } from './api/faqs.route';
import { router as hashtagsRoute } from './api/hashtags.route';
import { router as jobsRoute } from './api/jobs.route';
import { router as likesRoute } from './api/likes.route';
import { router as listingsRoute } from './api/listings.route';
import { router as categoriesRoute } from './api/categories.route';
import { router as listingCommentsRoute } from './api/listingComments.route';
import { router as listingLocationsRoute } from './api/listingLocations.route';
import { router as listingUpdatesRoute } from './api/listingUpdates.route';
import { router as locationsRoute } from './api/locations.route';
import { router as milestonesRoute } from './api/milestones.route';
import { router as organisationsRoute } from './api/organisations.route';
import { router as participantsRoute } from './api/participants.route';
import { router as programmesRoute } from './api/programmes.route';
import { router as usersRoute } from './api/users.route';
import { router as uploadsRoute } from './api/uploads.route';
import { router as sendEmailRoute } from './api/sendEmail.route';
import { router as listingsOrganisationsRoute } from './api/listingsOrganisations.route';
import { router as organisationAnnouncementsRoute } from './api/organisationAnnoucements.route';

// Mount routes
apiRouter.use('/auth', authRoute);
apiRouter.use('/faqs', faqsRoute);
apiRouter.use('/hashtags', hashtagsRoute);
apiRouter.use('/jobs', jobsRoute);
apiRouter.use('/likes', likesRoute);
apiRouter.use('/listings', listingsRoute);
apiRouter.use('/categories', categoriesRoute);
apiRouter.use('/listing-comments', listingCommentsRoute);
apiRouter.use('/listing-locations', listingLocationsRoute);
apiRouter.use('/listing-updates', listingUpdatesRoute);
apiRouter.use('/locations', locationsRoute);
apiRouter.use('/milestones', milestonesRoute);
apiRouter.use('/organisations', organisationsRoute);
apiRouter.use('/participants', participantsRoute);
apiRouter.use('/programmes', programmesRoute);
apiRouter.use('/users', usersRoute);
apiRouter.use('/file-upload', uploadsRoute);
apiRouter.use('/send-email', sendEmailRoute);
apiRouter.use('/listings-organisations', listingsOrganisationsRoute);
apiRouter.use('/announcements', organisationAnnouncementsRoute);

apiRouter.use('/*', (req, res) => res.status(404).json({ success: false, error: `Cannot ${req.method} ${req.originalUrl}` }));
