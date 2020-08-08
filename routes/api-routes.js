const express = require('express');
const router = express.Router();

const authRoute = require('./api/auth-routes');
const faqRoute = require('./api/faq-routes');
const hashtagRoute = require('./api/hashtag-routes');
const jobRoute = require('./api/job-routes');
const likeRoute = require('./api/like-routes');
const listingRoute = require('./api/listing-routes');
const milestoneRoute = require('./api/milestone-routes');
const participantRoute = require('./api/participant-routes');
const profileRoute = require('./api/profile-routes');
const skillRoute = require('./api/skill-routes');
const userRoute = require('./api/user-routes');

// Mount routes
router.use('/auth', authRoute);
router.use('/faqs', faqRoute);
router.use('/hashtags', hashtagRoute);
router.use('/jobs', jobRoute);
router.use('/likes', likeRoute);
router.use('/listings', listingRoute);
router.use('/milestones', milestoneRoute);
router.use('/profiles', profileRoute);
router.use('/participants', participantRoute);
router.use('/skills', skillRoute);
router.use('/users', userRoute);

module.exports = router;
