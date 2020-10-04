import express from 'express';
export const router = express.Router();
import { map } from 'lodash';
import { mapSingleFileLocation, protect } from '../../middleware';
import { uploadFile } from '../../utils';

router.post('/', protect, uploadFile.single('file'), mapSingleFileLocation('fileLocation'), (req, res) => {
    res.status(200).json({ success: true, data: req.body.fileLocation });
});

router.post('/multi', protect, uploadFile.array('files'), (req, res) => {
    res.status(200).json({ success: true, data: map(req.files, (file) => file.location) });
});
