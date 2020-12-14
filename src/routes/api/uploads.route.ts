import express from 'express';
export const router = express.Router();

import { asyncHandler, protect } from '../../middleware';

// import and initialize controllers here
import { uploadsController } from '../../controllers/uploads';

router.post('/', protect, asyncHandler(uploadsController.uploadFilesToPublic));
