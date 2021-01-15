import { BaseRepository } from './base.repository';
import { OrganisationJob, CreateOrganisationJobSchema, UpdateOrganisationJobSchema } from '../../models';

export class OrganisationJobsRepository extends BaseRepository {
    async getAllJobsForOrganisation(organisationId: string): Promise<OrganisationJob[]> {
        return this.db.manyOrNone('SELECT * FROM organisationjob WHERE organisation_id = $1', organisationId);
    }

    async getOrganisationJobById(organisationJobId: string): Promise<OrganisationJob> {
        return this.db.one('SELECT * FROM organisationjob WHERE organisation_job_id = $1', organisationJobId);
    }

    async createOrganisationJob(createOrganisationJobData: CreateOrganisationJobSchema): Promise<OrganisationJob> {
        return this.db.one('INSERT INTO organisationjob (${this:name}) VALUES (${this:csv}) RETURNING *', createOrganisationJobData);
    }

    async updateOrganisationJobById(updateOrganisationJobData: UpdateOrganisationJobSchema, organisationJobId: string): Promise<OrganisationJob> {
        const updateOrganisationJobQuery =
            this.pgp.helpers.update(updateOrganisationJobData, null, 'organisationjob') +
            this.pgp.as.format(' WHERE organisation_job_id = $1 RETURNING *', organisationJobId);
        return this.db.one(updateOrganisationJobQuery);
    }

    async deleteOrganisationJobById(organisationJobId: string): Promise<OrganisationJob> {
        return this.db.one('DELETE FROM organisationjob WHERE organisation_job_id = $1 RETURNING *', organisationJobId);
    }
}
