const dotenv = require('dotenv');
const path = require('path');

// TODO: find out if loading dotenv config in non server/index.js file is good practice, else try pre-loading dotenv files on start-up
// see: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// and: https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad
dotenv.config({ path: 'config/config.env' });

const dbConfig = {
  query(e) {
    console.log(`EXECUTING QUERY: ${e.query}`.dim);
  },
  error(err, e) {
    // console.error(JSON.stringify(e, null, 2).red);
    console.error(JSON.stringify(err, null, 2).red);
  },
  capSQL: true
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

// Helper for linking to external query files:
const generateSqlQueryFile = file => {
  const fullPath = path.join(__dirname, file);
  return new pgp.QueryFile(fullPath, { minify: true });
};

/**
 * Helper for creating String SQL update statement
 * Sample: parseSqlUpdateStmt(data, 'listings', 'WHERE listing_id = $1 RETURNING *', [req.params.id]);
 * @param {Object} jsonData
 * @param {String} tableString SQL table to be queried
 * @param {String} conditionString SQL string to be appended to update statement (usually WHERE clause and 'RETURNING *')
 * @param {String or Array} conditionDataArray data to be formatted into the WHERE clause
 */
const parseSqlUpdateStmt = (
  jsonData,
  tableString,
  conditionString,
  conditionDataArray
) => {
  const condition = pgp.as.format(' ' + conditionString, conditionDataArray);
  return pgp.helpers.update(jsonData, null, tableString) + condition;
};

module.exports = {
  checkConn,
  db,
  generateSqlQueryFile,
  parseSqlUpdateStmt,
  pgp
};
