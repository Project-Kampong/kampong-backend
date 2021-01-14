import express from 'express';

export const router = express.Router();

import { chatRoomController } from '../../controllers/chatRooms';
import { asyncHandler, protect } from '../../middleware';

// All chatroom routes are accessible by authenticated user only
router.use(protect);

router.route('/').get(asyncHandler(chatRoomController.getChatroomsForUser));
