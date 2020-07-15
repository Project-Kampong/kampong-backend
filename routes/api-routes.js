const express = require('express');
const router = express.Router();
const listingRoute = require('./listing-routes');
const userRoute = require('./user-routes');
const authRoute = require('./auth-routes');
const skillRoute = require('./skill-routes');
const profileRoute = require('./profile-routes');

// Mount routes
router.use('/listings', listingRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/skills', skillRoute);
router.use('/profiles', profileRoute);

module.exports = router;
