import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { CreateJobSchema, DeactivateJobSchema, Job, UpdateJobSchema } from '../models';

export class JobsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getAllJobsForListing(listingId: string): Promise<Job[]> {
        return this.db.manyOrNone('SELECT * FROM jobsview WHERE listing_id = $1', listingId);
    }

    getJobById(jobId: string): Promise<Job> {
        return this.db.one('SELECT * FROM jobsview WHERE job_id = $1', jobId);
    }

    createJob(createJobData: CreateJobSchema): Promise<Job> {
        return this.db.one('INSERT INTO jobs (${this:name}) VALUES (${this:csv}) RETURNING *', createJobData);
    }

    updateJobById(updateJobData: UpdateJobSchema, jobId: string): Promise<Job> {
        const updateJobQuery = this.pgp.helpers.update(updateJobData, null, 'jobs') + this.pgp.as.format(' WHERE job_id = $1 RETURNING *', jobId);
        return this.db.one(updateJobQuery);
    }

    deactivateJobById(deactivateJobData: DeactivateJobSchema, jobId: string): Promise<Job> {
        const deactivateJobQuery =
            this.pgp.helpers.update(deactivateJobData, null, 'jobs') + this.pgp.as.format(' WHERE job_id = $1 RETURNING *', jobId);
        return this.db.one(deactivateJobQuery);
    }

    deleteJobById(jobId: string): Promise<Job> {
        return this.db.one('DELETE FROM jobs WHERE job_id = $1 RETURNING *', jobId);
    }
}
