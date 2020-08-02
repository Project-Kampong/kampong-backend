const express = require('express');
const router = express.Router();

const { uploadFile } = require('../../utils/fileUploader');

router.post('/', uploadFile.single('file'), (req, res) => {
  res.status(200).json({ success: true, data: req.file });
});

module.exports = router;
