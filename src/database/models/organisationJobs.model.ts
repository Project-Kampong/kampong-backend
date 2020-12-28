export interface OrganisationJob {
    organisation_job_id: number;
    organisation_id: string;
    organisation_job_title: string;
    organisation_job_description: string;
    deleted_on: Date;
}

export interface CreateOrganisationJobSchema {
    organisation_id: string;
    organisation_job_title: string;
    organisation_job_description: string;
}

export interface UpdateOrganisationJobSchema {
    organisation_job_title: string;
    organisation_job_description: string;
}
