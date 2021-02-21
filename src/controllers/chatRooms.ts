import { v1 as uuidv1 } from 'uuid';
import { db, ChatRoomsRepository } from '../database';
import { modelValidator, ErrorResponse, ModelValidator } from '../utils';
import { CreateChatRoomReqDto } from '../models';
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
    getChatroomById = async (req, res, next) => {
        const chatRoomId = req.params.chatroom_id;
        const users = await this.chatRoomsRepository.getAllUsersByChatroom(chatRoomId);
        const isInChatRoom = users.map(({ user_id }) => user_id).includes(req.user.user_id);
        if (!isInChatRoom) {
            return next(new ErrorResponse('User does not belong to this chat room', 403));
        }
        const messages = await this.chatRoomsRepository.getMessagesByChatroomAndTime(chatRoomId);
        res.status(200).json({ success: true, data: { users, messages } });
    };

    /**
     * @desc    Create single chatroom
     * @route   POST /api/chatrooms
     * @access  Private (Current logged in user must be in chatroom)
     */
    createChatroom = async (req, res, next) => {
        const { chatroom_name, chatroom_pic, is_dm, user_ids: rawUserIdArr } = req.body;
        rawUserIdArr.push(req.user.user_id);
        const user_ids = [...new Set<string>(rawUserIdArr)];
        const chatroom_id = uuidv1();
        const data = { chatroom_id, chatroom_name, chatroom_pic, is_dm, user_ids };
        await this.modelValidator.validateModel(CreateChatRoomReqDto, data);

        const newChatroom = await this.chatRoomsRepository.createChatRoom(data);

        res.status(201).json({
            success: true,
            data: newChatroom[0],
        });
    };

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
