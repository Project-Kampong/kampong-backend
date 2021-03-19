import { IsUUID } from 'class-validator';
import { INVALID_FIELD_MSG } from '../utils';

export interface Like {
    like_id: number;
    user_id: number;
    listing_id: string;
}

export class LikeInfo {
    like_id: number;
    user_id: number;
    listing_id: string;
    nickname: string;
    profile_picture: string;
}

export interface NewLikeSchema {
    user_id: number;
    listing_id: string;
}

export class NewLikeReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG(`user id`) })
    user_id: string;

    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('listing id') })
    listing_id: string;
}
