export interface Message {
    chatmessage_id: string;
    user_id: string;
    message_text: string;
    reply_to: string;
    files: string[];
    created_on: Date;
    updated_on: Date;
}

export interface Chatroom {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    user_ids: string[];
    messages: Message[];
}
