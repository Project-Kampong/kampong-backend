const dotenv = require('dotenv');

// TODO: find out if loading dotenv config in non server/index.js file is good practice, else try pre-loading dotenv files on start-up
// see: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// and: https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad
dotenv.config({ path: 'config/config.env' });

const dbConfig = {
  query(e) {
    console.log(`EXECUTING QUERY: ${e.query}`.dim);
  },
  error(err, e) {
    console.error(JSON.stringify(e, null, 2).red);
  }
};
const pgp = require('pg-promise')(dbConfig);

// To be called by main server driver (with loaded env vars)
const db = pgp({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_NAME,
  user: process.env.PG_USER
});

const checkConn = async () => {
  const res = await db.query(
    `select format('database: %s as user: %s',current_database(), user) db_info`
  );
  console.log(`Connected to ${res[0].db_info}`.cyan.underline.bold);
};

module.exports = { checkConn, db };
