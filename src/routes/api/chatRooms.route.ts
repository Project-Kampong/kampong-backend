import express from 'express';
export const router = express.Router({ mergeParams: true });

import { chatRoomsController } from '../../controllers/chatRooms';
import { asyncHandler, protect } from '../../middleware';

// All chatroom routes are accessible by authenticated user only
router.use(protect);

router.route('/').post(asyncHandler(chatRoomsController.createChatroom));

router.route('/me').get(asyncHandler(chatRoomsController.getChatroomsForUser));

// TODO: move to messages route (use express router mergeParams) when new endpoints added to it
router.route('/messages').post(asyncHandler(chatRoomsController.sendMessageToChatRoom));

router.route('/:chatroom_id/update-last-seen').put(asyncHandler(chatRoomsController.updateUserLastSeen));

router.route('/:chatroom_id').get(asyncHandler(chatRoomsController.getChatroomById));
