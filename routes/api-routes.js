const express = require('express');
const router = express.Router();
const listingRoute = require('./listing-routes');
const userRoute = require('./user-routes');
const authRoute = require('./auth-routes');
const skillRoute = require('./skill-routes');
const profileRoute = require('./profile-routes');
const faqRoute = require('./faq-routes');
const participantRoute = require('./participant-routes');

// Mount routes
router.use('/listings', listingRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/skills', skillRoute);
router.use('/profiles', profileRoute);
router.use('/faqs', faqRoute);
router.use('/participants', participantRoute);

module.exports = router;
