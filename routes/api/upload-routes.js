const express = require('express');
const router = express.Router();

const { mapSingleFileLocation, protect } = require('../../middleware');
const { uploadFile } = require('../../utils');

router.post('/', protect, uploadFile.single('file'), mapSingleFileLocation('fileLocation'), (req, res) => {
    res.status(200).json({ success: true, data: req.body.fileLocation });
});

router.post('/multi', protect, uploadFile.array('files'), (req, res) => {
    res.status(200).json({ success: true, data: req.files.map((file) => file.location) });
});

module.exports = router;
