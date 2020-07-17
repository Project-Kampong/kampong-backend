const express = require('express');
const router = express.Router();

// Include other resource's controllers to access their endpoints
const skillRoute = require('./skill-routes');
const participantRoute = require('./participant-routes');

// Re-route this URI to other resource router
router.use('/:profile_id/skills', skillRoute);
router.use('/:user_id/participants', participantRoute);

module.exports = router;
