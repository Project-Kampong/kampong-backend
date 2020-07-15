const express = require('express');
const router = express.Router();

// Include other resource's controllers to access their endpoints
const skillRoute = require('./skill-routes');

// Re-route this URI to other resource router
router.use('/:profileId/skills', skillRoute);

module.exports = router;
