export interface ChatMessage {
    chatmessage_id: number;
    chatroom_id: string;
    user_id: string;
    chatmessage_text: string;
    reply_to: number;
    file_links: string[];
    created_on: Date;
    updated_on: Date;
}

export interface Chatroom {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
    created_on: Date;
    updated_on: Date;
}
