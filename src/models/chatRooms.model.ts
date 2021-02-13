export interface ChatRoom {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
    created_on: Date;
    updated_on: Date;
}

export interface ChatroomForUserResponseDto {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
    created_on: Date;
    updated_on: Date;
    last_seen: Date;
    joined_on: Date;
}

export interface CreateChatRoomSchema {
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
}
