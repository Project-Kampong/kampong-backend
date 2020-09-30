import dotenv from 'dotenv';
import Promise from 'bluebird';
import pgpDriver from 'pg-promise';

// TODO: find out if loading dotenv config in non server/index.js file is good practice, else try pre-loading dotenv files on start-up
// see: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// and: https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad
dotenv.config({ path: 'config/config.env' });

const dbConfig = {
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
    capSQL: true,
    promiseLib: Promise,
};

export const pgp = pgpDriver(dbConfig);

// To be called by main server driver (with loaded env vars)
export const db = pgp({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT, 10),
    database: process.env.PG_NAME,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
});
