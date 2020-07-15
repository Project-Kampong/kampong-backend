const express = require('express');
const router = express.Router();

// Include other resource's controllers to access their endpoints
const skillRouter = require('./skill-routes');

// Re-route this URI to other resource router
router.use('/:profileId/skills', skillRouter);

module.exports = router;
