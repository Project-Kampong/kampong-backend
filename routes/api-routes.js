const express = require('express');
const router = express.Router();

const authRoute = require('./api/auth-routes');
const faqRoute = require('./api/faq-routes');
const featuredListingRoute = require('./api/featuredlisting-routes');
const hashtagRoute = require('./api/hashtag-routes');
const jobRoute = require('./api/job-routes');
const likeRoute = require('./api/like-routes');
const listingRoute = require('./api/listing-routes');
const listingCommentRoute = require('./api/listingcomment-routes');
const listingLocationRoute = require('./api/listinglocation-routes');
const listingSkillRoute = require('./api/listingskill-routes');
const listingUpdateRoute = require('./api/listingupdate-routes');
const locationRoute = require('./api/location-routes');
const milestoneRoute = require('./api/milestone-routes');
const participantRoute = require('./api/participant-routes');
const skillRoute = require('./api/skill-routes');
const userRoute = require('./api/user-routes');
const uploadRoute = require('./api/upload-routes');
const sendEmailRoute = require('./api/sendemail-routes');

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

module.exports = router;
