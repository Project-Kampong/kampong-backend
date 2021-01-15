import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { INVALID_FIELD_MSG } from '../utils';

export interface Faq {
    faq_id: number;
    listing_id: string;
    question: string;
    answer: string;
}

export interface CreateFaqSchema {
    listing_id: string;
    question: string;
    answer?: string;
}

export interface UpdateFaqSchema {
    question: string;
    answer?: string;
}

export class CreateFaqReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('listing id') })
    listing_id: string;

    @IsString({ message: () => INVALID_FIELD_MSG('question') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('question') })
    question: string;

    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('answer') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('answer') })
    answer?: string;
}

export class UpdateFaqReqDto {
    @IsString({ message: () => INVALID_FIELD_MSG('question') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('question') })
    question: string;

    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('answer') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('answer') })
    answer?: string;
}
