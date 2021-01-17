export interface Job {
    job_id: number;
    listing_id: string;
    job_title: string;
    job_description: string;
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
