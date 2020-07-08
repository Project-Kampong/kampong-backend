const express = require('express');
const router = express.Router();
const userRoute = require('./user-routes');
const authRoute = require('./auth-routes');

// Mount routes
router.use('/users', userRoute);
router.use('/auth', authRoute);

module.exports = router;
