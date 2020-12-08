import dotenv from 'dotenv';
import promise from 'bluebird';
import pgpDriver, { IInitOptions, IDatabase, IMain } from 'pg-promise';
import { IExtensions, ListingsRepository, FaqsRepository, HashtagsRepository, CategoriesRepository } from './repositories';
import { JobsRepository } from './repositories/jobs.repository';
import { OrganisationsRepository, OrganisationJobsRepository } from './repositories';

export type PgpExtendedProtocol = IDatabase<IExtensions> & IExtensions;

dotenv.config({ path: 'config/config.env' });

const dbConfig: IInitOptions<IExtensions> = {
    query(e) {
        // only run in development mode
        if (process.env.NODE_ENV === 'development') {
            console.log(`EXECUTING QUERY: ${e.query}`.dim);
        }
    },
    error(err, e) {
        // only run in development mode
        if (process.env.NODE_ENV === 'development') {
            console.error(JSON.stringify(err, null, 2).red);
        }
    },
    // Initialize repositories as singleton here
    extend(obj: PgpExtendedProtocol) {
        obj.categories = new CategoriesRepository(obj, pgp);
        obj.faqs = new FaqsRepository(obj, pgp);
        obj.hashtags = new HashtagsRepository(obj, pgp);
        obj.jobs = new JobsRepository(obj, pgp);
        obj.listings = new ListingsRepository(obj, pgp);
        obj.organisations = new OrganisationsRepository(obj, pgp);
        obj.organisationJobs = new OrganisationJobsRepository(obj, pgp);
    },
    capSQL: true,
    promiseLib: promise,
};

export const pgp: IMain = pgpDriver(dbConfig);

// To be called by main server driver (with loaded env vars)
export const db: PgpExtendedProtocol = pgp({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10),
    database: process.env.PG_NAME,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
});
