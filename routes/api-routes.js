const express = require('express');
const router = express.Router();
const listingRoute = require('./listing-routes');
const skillRoute = require('./skill-routes');
const userRoute = require('./user-routes');
const authRoute = require('./auth-routes');

// Mount routes
router.use('/listings', listingRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);
router.use('/skills', skillRoute);

module.exports = router;
