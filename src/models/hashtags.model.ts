import { IsUUID, Matches } from 'class-validator';
import { HASHTAG_REGEX, INVALID_FIELD_MSG } from '../utils';

export interface Hashtag {
    hashtag_id: number;
    listing_id: string;
    tag: string;
}

export interface CreateHashtagSchema {
    listing_id: string;
    tag: string;
}

export class CreateHashtagReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('listing id') })
    listing_id: string;

    @Matches(HASHTAG_REGEX, { message: () => INVALID_FIELD_MSG('tag') })
    tag: string;
}
