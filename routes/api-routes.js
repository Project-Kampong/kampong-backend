const express = require('express');
const router = express.Router();
const listingRoute = require('./listing-routes');
const userRoute = require('./user-routes');
const authRoute = require('./auth-routes');

// Mount routes
router.use('/listings', listingRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);

module.exports = router;
