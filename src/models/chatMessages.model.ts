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
