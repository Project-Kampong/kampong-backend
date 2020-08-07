const express = require('express');
const router = express.Router();

const { uploadFile } = require('../../utils/fileUploader');

router.post('/', uploadFile.single('file'), (req, res) => {
  res.status(200).json({ success: true, data: req.file });
});

router.post('/multi', uploadFile.array('file', 3), (req, res) => {
  res.status(200).json({ success: true, data: req.files });
});

module.exports = router;
