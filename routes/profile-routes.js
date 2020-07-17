const express = require('express');
const router = express.Router();

// Include other resource's controllers to access their endpoints
const skillRoute = require('./skill-routes');
const participantRoute = require('./participant-routes');

// Re-route this URI to other resource router
router.use('/:profileId/skills', skillRoute);
router.use('/:user_id/skills', participantRoute);

module.exports = router;
