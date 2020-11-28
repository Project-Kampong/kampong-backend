import express from 'express';
export const router = express.Router();
import { s3ClientService } from '../../services/s3Client.service';
import { protect } from '../../middleware';

// import and initialize controllers here
import { UploadsController } from '../../controllers/uploads';
const uploadsController = new UploadsController(s3ClientService);

router.post('/v2', protect, uploadsController.uploadSingleFileToPublic);

router.post('/v2/multi', protect, uploadsController.uploadMultipleFilesToPublic);
