import { BaseRepository } from './base.repository';
import { CreateJobSchema, DeactivateJobSchema, Job, UpdateJobSchema } from '../models';

export class JobsRepository extends BaseRepository {
    getAllJobsForListing(listingId: string): Promise<Job[]> {
        return this.db.manyOrNone('SELECT * FROM job WHERE listing_id = $1', listingId);
    }

    getJobById(jobId: string): Promise<Job> {
        return this.db.one('SELECT * FROM job WHERE job_id = $1', jobId);
    }

    createJob(createJobData: CreateJobSchema): Promise<Job> {
        return this.db.one('INSERT INTO job (${this:name}) VALUES (${this:csv}) RETURNING *', createJobData);
    }

    updateJobById(updateJobData: UpdateJobSchema, jobId: string): Promise<Job> {
        const updateJobQuery = this.pgp.helpers.update(updateJobData, null, 'job') + this.pgp.as.format(' WHERE job_id = $1 RETURNING *', jobId);
        return this.db.one(updateJobQuery);
    }

    deactivateJobById(deactivateJobData: DeactivateJobSchema, jobId: string): Promise<Job> {
        const deactivateJobQuery =
            this.pgp.helpers.update(deactivateJobData, null, 'job') + this.pgp.as.format(' WHERE job_id = $1 RETURNING *', jobId);
        return this.db.one(deactivateJobQuery);
    }

    deleteJobById(jobId: string): Promise<Job> {
        return this.db.one('DELETE FROM job WHERE job_id = $1 RETURNING *', jobId);
    }
}
