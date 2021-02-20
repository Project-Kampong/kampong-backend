import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { INVALID_FIELD_MSG } from '../utils';

export interface Job {
    job_id: number;
    listing_id: string;
    job_title: string;
    job_description: string;
    deleted_on: Date;
}

export interface CreateJobSchema {
    listing_id: string;
    job_title: string;
    job_description: string;
}

export interface UpdateJobSchema {
    job_title: string;
    job_description: string;
}

export class CreateJobReqDto {
    @IsUUID(undefined, { message: () => INVALID_FIELD_MSG('listing id ') })
    listing_id: string;

    @IsString({ message: () => INVALID_FIELD_MSG('job title') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('job title') })
    job_title: string;

    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('job description') })
    job_description: string;
}

export class UpdateJobReqDto {
    @IsString({ message: () => INVALID_FIELD_MSG('job title') })
    @IsNotEmpty({ message: () => INVALID_FIELD_MSG('job title') })
    job_title: string;

    @IsOptional()
    @IsString({ message: () => INVALID_FIELD_MSG('job description') })
    job_description: string;
}
