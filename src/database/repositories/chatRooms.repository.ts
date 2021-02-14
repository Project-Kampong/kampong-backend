import { BaseRepository } from './base.repository';
import { ChatRoom, ChatroomForUserResponseDto, CreateChatRoomSchema } from '../../models';

export class ChatRoomsRepository extends BaseRepository {
    getAllChatRoomsForUser(userId: string): Promise<ChatroomForUserResponseDto[]> {
        return this.db.manyOrNone(
            'SELECT cp.last_seen, cp.joined_on, cr.* FROM chatparticipant cp JOIN chatroom cr ON cp.chatroom_id = cr.chatroom_id WHERE cp.user_id = $1',
            userId,
        );
    }

    getChatRoomById(ChatRoomId: string): Promise<ChatRoom> {
        return this.db.one('SELECT * FROM chatroom WHERE ChatRoom_id = $1', ChatRoomId);
    }

    createChatRoom(createChatRoomData: CreateChatRoomSchema): Promise<ChatRoom> {
        return this.db.one('INSERT INTO chatroom (${this:name}) VALUES (${this:csv}) RETURNING *', createChatRoomData);
    }
}
