import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { OrganisationJob, CreateOrganisationJobSchema, UpdateOrganisationJobSchema, DeactivateOrganisationJobSchema } from '../models';

export class OrganisationJobsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getAllJobsForOrganisation(organisationId: string): Promise<OrganisationJob[]> {
        return this.db.manyOrNone('SELECT * FROM organisationjob WHERE organisation_id = $1', organisationId);
    }

    createOrganisationJob(createOrganisationJobData: CreateOrganisationJobSchema): Promise<OrganisationJob> {
        return this.db.one('INSERT INTO organisationjob (${this:name}) VALUES (${this:csv}) RETURNING *', createOrganisationJobData);
    }

    updateOrganisationJobById(updateOrganisationJobData: UpdateOrganisationJobSchema, organisationJobId: string): Promise<OrganisationJob> {
        const updateOrganisationJobQuery =
            this.pgp.helpers.update(updateOrganisationJobData, null, 'organisationjob') +
            this.pgp.as.format(' WHERE organisation_job_id = $1 RETURNING *', organisationJobId);
        return this.db.one(updateOrganisationJobQuery);
    }

    deleteOrganisationJobById(organisationJobId: string): Promise<OrganisationJob> {
        return this.db.one('DELETE FROM organisationjob WHERE organisation_job_id = $1 RETURNING *', organisationJobId);
    }
}
