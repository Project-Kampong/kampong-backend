export interface ChatRoom {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
    created_on: Date;
    updated_on: Date;
}

export interface ChatRoomMessage {
    chatmessage_id: number;
    chatroom_id: string;
    user_id: string;
    chatmessage_text: string;
    reply_to: number;
    file_links: string[];
    created_on: Date;
    updated_on: Date;
}

export interface ChatRoomUser {
    user_id: string;
    nickname: string;
    profile_picture: string;
}
export interface ChatRoomMessageResponseDto {
    users: ChatRoomUser[];
    messages: ChatRoomMessage[];
}

export interface ChatRoomForUserResponseDto {
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

export interface CreateChatRoomRequestDto {
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
}

export interface SendMessageRequestDto {
    chatroom_id: string;
    user_id: string;
    chatmessage_text: string;
    reply_to: number;
    file_links: string[];
}
