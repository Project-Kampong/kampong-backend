export interface ChatRoom {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    user_ids: string[];
    created_on: Date;
    updated_on: Date;
}
