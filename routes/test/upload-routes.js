const express = require('express');
const router = express.Router();

const { mapSingleFileLocation } = require('../../middleware/fileUploadHelper');
const { uploadFile } = require('../../utils/fileUploader');

router.post(
  '/',
  uploadFile.single('file'),
  mapSingleFileLocation('fileLocation'),
  (req, res) => {
    res.status(200).json({ success: true, data: req.body.fileLocation });
  }
);

module.exports = router;
