import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';
import { INVALID_FIELD_MSG } from '../utils';

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
export interface ChatRoomMessageResDto {
    users: ChatRoomUser[];
    messages: ChatRoomMessage[];
}

export interface ChatRoomForUserResDto {
    chatroom_id: string;
    chatroom_name: string;
    chatroom_pic: string;
    is_dm: boolean;
    last_seen: Date;
    chatmessage_text: string;
    created_on: Date;
    user_id: string;
}

export class CreateChatRoomReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('chatroom id') })
    chatroom_id: string;
    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('chatroom name') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('chatroom name') })
    chatroom_name: string;
    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('chatroom picture') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('chatroom picture') })
    chatroom_pic: string;
    @IsOptional()
    @IsBoolean({ message: () => INVALID_FIELD_MSG('is_dm') })
    is_dm: boolean;
    @IsArray()
    @IsUUID(undefined, { each: true, message: () => INVALID_FIELD_MSG('user ids') })
    user_ids: string[];
}

export class SendMessageReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('chatroom id') })
    chatroom_id: string;
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('user id') })
    user_id: string;
    @IsString({ message: () => INVALID_FIELD_MSG('chat message text') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('chat message text') })
    chatmessage_text: string;
    @IsOptional()
    @IsInt({ message: () => INVALID_FIELD_MSG('reply to') })
    reply_to: number;
    @IsOptional()
    @IsArray()
    @IsUrl(null, { message: () => INVALID_FIELD_MSG('file links') })
    file_links: string[];
}

export class UpdateLastSeenDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('chatroom id') })
    chatroom_id: string;
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('user id') })
    user_id: string;
}
