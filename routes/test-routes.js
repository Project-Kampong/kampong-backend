const express = require('express');
const router = express.Router();

const uploadRoute = require('./test/upload-routes');

// Mount test routes
router.use('/file-upload', uploadRoute);

module.exports = router;
