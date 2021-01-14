class ChatRoomController {
    constructor() {}

    /**
     * @desc    Get all chatrooms a user is in
     * @route   GET /api/users/:user_id/chatrooms
     * @access  Private
     */
    getChatroomsForUser = async (req, res, next) => {};

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
     * @desc    Delete chatroom
     * @route   DELETE /api/chatrooms
     * @access  Private (Current logged in user must be in chatroom)
     */
    deleteChatroom = async (req, res, next) => {};
}

export const chatRoomController = new ChatRoomController();
