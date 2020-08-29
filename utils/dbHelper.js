const path = require('path');
const { db, pgp } = require('../db/db');

// Helper to remove undefined values in JSON object
// Used for parsing request body in insert and update of db entries
exports.cleanseData = async (data) => {
    Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);
};

exports.checkConn = async () => {
    const res = await db.query(`select format('database: %s as user: %s',current_database(), user) db_info`);
    console.log(`Connected to ${res[0].db_info}`.cyan.underline.bold);
};

// Helper for linking to external query files:
exports.generateSqlQueryFile = (file) => {
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
exports.parseSqlUpdateStmt = (jsonData, tableString, conditionString, conditionDataArray) => {
    const condition = pgp.as.format(' ' + conditionString, conditionDataArray);
    return pgp.helpers.update(jsonData, null, tableString) + condition;
};
