const express = require('express');
const router = express.Router();

const authRoute = require('./auth-routes');
const faqRoute = require('./faq-routes');
const hashtagRoute = require('./hashtag-routes');
const jobRoute = require('./job-routes');
const likeRoute = require('./like-routes');
const listingRoute = require('./listing-routes');
const listingSkillRoute = require('./listingskill-routes');
const milestoneRoute = require('./milestone-routes');
const participantRoute = require('./participant-routes');
const profileRoute = require('./profile-routes');
const skillRoute = require('./skill-routes');
const userRoute = require('./user-routes');

// Mount routes
router.use('/auth', authRoute);
router.use('/faqs', faqRoute);
router.use('/hashtags', hashtagRoute);
router.use('/jobs', jobRoute);
router.use('/likes', likeRoute);
router.use('/listings', listingRoute);
router.use('/listing-skills', listingSkillRoute);
router.use('/milestones', milestoneRoute);
router.use('/profiles', profileRoute);
router.use('/participants', participantRoute);
router.use('/skills', skillRoute);
router.use('/users', userRoute);

module.exports = router;
