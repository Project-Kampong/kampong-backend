import { BaseRepository } from './base.repository';
import { ChatRoom, ChatRoomMessage, ChatRoomForUserResponseDto, CreateChatRoomRequestDto, SendMessageRequestDto } from '../../models';

export class ChatRoomsRepository extends BaseRepository {
    getAllChatRoomsForUser(userId: string): Promise<ChatRoomForUserResponseDto[]> {
        return this.db.manyOrNone(
            'SELECT cp.last_seen, cp.joined_on, cr.* FROM chatparticipant cp JOIN chatroom cr ON cp.chatroom_id = cr.chatroom_id WHERE cp.user_id = $1',
            userId,
        );
    }

    getChatRoomAndMessagesById(ChatRoomId: string): Promise<ChatRoomMessage> {
        return this.db.one('SELECT * FROM chatroom WHERE chatroom_id = $1', ChatRoomId);
    }

    createChatRoom(createChatRoomData: CreateChatRoomRequestDto): Promise<ChatRoom> {
        return this.db.one('INSERT INTO chatroom (${this:name}) VALUES (${this:csv}) RETURNING *', createChatRoomData);
    }

    sendMessageToChatroom(sendMessageData: SendMessageRequestDto): Promise<ChatRoom> {
        return this.db.one('INSERT INTO chatmessage (${this:name}) VALUES (${this:csv}) RETURNING *', sendMessageData);
    }

    updateUserLastSeen(userChatRoomData: { user_id: string; chatroom_id: string }): Promise<{ last_seen: Date }> {
        const { user_id, chatroom_id } = userChatRoomData;
        return this.db.one('UPDATE chatparticipant SET last_seen = NOW() WHERE user_id = $1 AND chatroom_id = $2 RETURNING last_seen', [
            user_id,
            chatroom_id,
        ]);
    }
}
