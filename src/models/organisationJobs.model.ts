export interface OrganisationJob {
    organisation_job_id: number;
    organisation_id: string;
    organisation_job_title: string;
    organisation_job_description: string;
}

export interface CreateOrganisationJobReqDto {
    organisation_id: string;
    organisation_job_title: string;
    organisation_job_description: string;
}

export interface UpdateOrganisationJobReqDto {
    organisation_job_title: string;
    organisation_job_description: string;
}
