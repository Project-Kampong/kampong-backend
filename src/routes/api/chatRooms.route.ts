import express from 'express';
export const router = express.Router({ mergeParams: true });

import { chatRoomsController } from '../../controllers/chatRooms';
import { asyncHandler, protect } from '../../middleware';

// All chatroom routes are accessible by authenticated user only
router.use(protect);

router.route('/').get(asyncHandler(chatRoomsController.getChatroomsForUser)).post(asyncHandler(chatRoomsController.createChatroom));

router.route('/:chatroom_id').get(asyncHandler(chatRoomsController.getChatroomById)).delete(asyncHandler(chatRoomsController.deleteChatroom));
