import { BaseRepository } from './base.repository';
import { ChatRoom, ChatRoomMessage, ChatRoomForUserResponseDto, CreateChatRoomRequestDto, SendMessageRequestDto, ChatRoomUser } from '../../models';
import { isEmpty } from 'lodash';

export class ChatRoomsRepository extends BaseRepository {
    getAllChatRoomsForUser(userId: string): Promise<ChatRoomForUserResponseDto[]> {
        return this.db.manyOrNone(
            'WITH user_chatroom_ids AS(SELECT chatroom_id,last_seen FROM chatparticipant WHERE user_id=$1),chatrooms_info AS(SELECT cr.chatroom_id,cr.chatroom_name,cr.chatroom_pic,cr.is_dm FROM chatroom cr JOIN user_chatroom_ids uci ON cr.chatroom_id=uci.chatroom_id),chatroom_most_recent_msg AS(SELECT t.*FROM(SELECT cm.chatroom_id,cm.chatmessage_text,cm.created_on,cm.user_id,ROW_NUMBER()OVER(PARTITION BY cm.chatroom_id ORDER BY created_on DESC,chatmessage_id DESC)AS rn FROM user_chatroom_ids uci JOIN chatmessage cm ON cm.chatroom_id=uci.chatroom_id)t WHERE t.rn=1),unread_msg_info AS(SELECT uci.chatroom_id,count(*)AS unread_msg_count FROM user_chatroom_ids uci JOIN chatmessage cm ON cm.chatroom_id=uci.chatroom_id WHERE cm.created_on>=uci.last_seen GROUP BY uci.chatroom_id),user_chatroom_msg_info AS(SELECT uci.chatroom_id,uci.last_seen,COALESCE(mi.unread_msg_count,0)AS unread_msg_count FROM user_chatroom_ids uci LEFT JOIN unread_msg_info mi ON uci.chatroom_id=mi.chatroom_id)SELECT cr.*,ucmi.last_seen,ucmi.unread_msg_count,cmrm.chatmessage_text,cmrm.created_on,cmrm.user_id FROM user_chatroom_msg_info ucmi JOIN chatroom cr ON ucmi.chatroom_id=cr.chatroom_id LEFT JOIN chatroom_most_recent_msg cmrm ON ucmi.chatroom_id=cmrm.chatroom_id',
            [userId],
        );
    }

    getMessagesByChatroomAndTime(chatRoomId: string, fromTime?: Date): Promise<ChatRoomMessage[]> {
        let getMsgQuery = 'SELECT * FROM chatmessage cm WHERE cm.chatroom_id = $1';
        const getMsgParams: [string, Date?] = [chatRoomId];
        if (!isEmpty(fromTime)) {
            getMsgQuery = isEmpty(fromTime) ? getMsgQuery + ' cm.created_on >= $2' : getMsgQuery;
            getMsgParams.push(fromTime);
        }
        return this.db.manyOrNone(getMsgQuery, getMsgParams);
    }

    getAllUsersByChatroom(chatRoomId: string): Promise<ChatRoomUser[]> {
        return this.db.manyOrNone(
            'SELECT cp.user_id, p.nickname, p.profile_picture FROM chatparticipant cp LEFT JOIN profile p ON cp.user_id = p.user_id WHERE cp.chatroom_id = $1',
            [chatRoomId],
        );
    }

    createChatRoom(createChatRoomData: CreateChatRoomRequestDto): Promise<ChatRoom> {
        return this.db.one('INSERT INTO chatroom (${this:name}) VALUES (${this:csv}) RETURNING *', createChatRoomData);
    }

    sendMessageToChatroom(sendMessageData: SendMessageRequestDto): Promise<ChatRoomMessage> {
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
