import 'colors';
import dotenv from 'dotenv';
import { get } from 'lodash';

require('ts-node/register');

dotenv.config({ path: '../../config/config.env' });

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT, 10),
        database: 'knex-test' || process.env.PG_NAME, // TODO: Remove knex-test once ready to add into db
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
    },
    pool: {
        min: 2,
        max: 10,
        afterCreate: (conn, done) => {
            const cp = get(conn, 'connectionParameters', {});
            console.log(`Connected to database: ${cp.database} on ${cp.host}:${cp.port} as user ${cp.user}`.cyan.underline.bold);
            done();
        },
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
    },
    seeds: {
        directory: './seeds',
    },
    timezone: 'UTC',
    debug: false,
};
