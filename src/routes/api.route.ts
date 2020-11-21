import express from 'express';
import { BaseRouter } from './base.route';

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
import { router as organisationLikesRoute } from './api/organisationLikes.route';

class ApiRouter extends BaseRouter {
    constructor(protected route: express.Router) {
        super(route);

        // Mount routes
        this.route.use('/auth', authRoute);
        this.route.use('/faqs', faqsRoute);
        this.route.use('/hashtags', hashtagsRoute);
        this.route.use('/jobs', jobsRoute);
        this.route.use('/likes', likesRoute);
        this.route.use('/listings', listingsRoute);
        this.route.use('/categories', categoriesRoute);
        this.route.use('/listing-comments', listingCommentsRoute);
        this.route.use('/listing-locations', listingLocationsRoute);
        this.route.use('/listing-updates', listingUpdatesRoute);
        this.route.use('/locations', locationsRoute);
        this.route.use('/milestones', milestonesRoute);
        this.route.use('/organisations', organisationsRoute);
        this.route.use('/participants', participantsRoute);
        this.route.use('/programmes', programmesRoute);
        this.route.use('/users', usersRoute);
        this.route.use('/file-upload', uploadsRoute);
        this.route.use('/send-email', sendEmailRoute);
        this.route.use('/listings-organisations', listingsOrganisationsRoute);
        this.route.use('/announcements', organisationAnnouncementsRoute);
        this.route.use('/organisation-likes', organisationLikesRoute);

        // All unimplemented route give 404 response
        this.route.use('/*', (req, res) => res.status(404).json({ success: false, error: `Route not found: ${req.method} ${req.originalUrl}` }));
    }
}

export const apiRouter = new ApiRouter(express.Router()).getRoute;
