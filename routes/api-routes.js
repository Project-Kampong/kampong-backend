const express = require('express');
const router = express.Router();
const userRoute = require('./user-routes');

// Mount routes
router.use('/users', userRoute);

module.exports = router;
