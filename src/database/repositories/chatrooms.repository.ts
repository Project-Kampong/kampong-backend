import { BaseRepository } from './base.repository';
import { Chatroom } from '../models';

export class ChatroomsRepository extends BaseRepository {
    getAllChatroomsForUser(userId: string): Promise<Chatroom[]> {
        return this.db.manyOrNone('SELECT * FROM chatroom WHERE user_id = $1', userId);
    }

    getChatroomById(chatroomId: string): Promise<Chatroom> {
        return this.db.one('SELECT * FROM chatroom WHERE chatroom_id = $1', chatroomId);
    }

    createChatroom(createChatroomData: CreateChatroomSchema): Promise<Chatroom> {
        return this.db.one('INSERT INTO chatroom (${this:name}) VALUES (${this:csv}) RETURNING *', createChatroomData);
    }

    updateChatroomById(updateChatroomData: UpdateChatroomSchema, chatroomId: string): Promise<Chatroom> {
        const updateChatroomQuery =
            this.pgp.helpers.update(updateChatroomData, null, 'chatroom') + this.pgp.as.format(' WHERE chatroom_id = $1 RETURNING *', chatroomId);
        return this.db.one(updateChatroomQuery);
    }
}
