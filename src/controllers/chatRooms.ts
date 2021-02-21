import { db, ChatRoomsRepository } from '../database';
import { modelValidator, ErrorResponse, ModelValidator } from '../utils';
class ChatRoomsController {
    constructor(private readonly chatRoomsRepository: ChatRoomsRepository, private readonly modelValidator: ModelValidator) {}

    /**
     * @desc    Get all chatrooms a user is in
     * @route   GET /api/chatrooms/me
     * @access  Private
     */
    getChatroomsForUser = async (req, res, next) => {
        const { user_id } = req.user;
        const chatRooms = await this.chatRoomsRepository.getAllChatRoomsForUser(user_id);
        const data = chatRooms.map((chatRoom) => {
            const { chatroom_id, chatroom_name, chatroom_pic, is_dm, last_seen, chatmessage_text, created_on, user_id } = chatRoom;
            return { chatroom_id, chatroom_name, chatroom_pic, is_dm, last_seen, most_recent_msg: { chatmessage_text, created_on, user_id } };
        });
        res.status(200).json({ success: true, data });
    };

    /**
     * @desc    Get single chatroom by chatroom id
     * @route   GET /api/chatrooms/:chatroom_id
     * @access  Private
     */
    getChatroomById = async (req, res, next) => {};

    /**
     * @desc    Create single chatroom
     * @route   POST /api/chatrooms
     * @access  Private (Current logged in user must be in chatroom)
     */
    createChatroom = async (req, res, next) => {};

    /**
     * @desc    Send message to chatroom
     * @route   POST /api/chatrooms/:chatroom_id/messages
     * @access  Private (Current logged in user must be in chatroom)
     */
    sendMessageToChatRoom = async (req, res, next) => {};

    /**
     * @desc    Update user's last seen
     * @route   PUT /api/chatrooms/:chatroom_id/update-last-seen
     * @access  Private (Current logged in user must be in chatroom)
     */
    updateUserLastSeen = async (req, res, next) => {};
}

export const chatRoomsController = new ChatRoomsController(db.chatRooms, modelValidator);
