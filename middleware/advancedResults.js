const asyncHandler = require('./async');
const { db, pgp } = require('../config/db');
const { cleanseData } = require('../utils/dbHelper');
const { hashEncode } = require('../utils/hashIdGenerator');

/**
 * Handles select, sort, page, limit and filter request queries.
 * Request queries begin with '?' and separated by '&'
 * For select and sort queries, multiple values must be separated
 * by commas, and in the order to be parsed as SQL query statements.
 * Filter query:
 * In current implementation, filter queries can check for exact
 * matches on multiple values (separated by single ',').
 * In checking for string matches, it is optional to use ' to enclose string values.
 * Sample request query. ?select=name,password&sort=name,user_role&page=2&limit=2&name='Ron'
 * @param {String} model name of SQL table to query
 * @param {String} join name of SQL to form an SQL join with (optional)
 * @param {String} using column name common to both table to form an SQL join on (required, if join is provided)
 */
const advancedResults = (model, join, using) =>
  asyncHandler(async (req, res, next) => {
    let { select, sort, page = 1, limit = 25 } = req.query;
    select = select ? select.split(',') : '*';
    sort = sort ? sort.split(',') : sort;
    page = parseInt(page);
    limit = parseInt(limit);

    const format = {
      select,
      model,
      sort,
      page,
      limit,
      join,
      using,
    };

    // remove undefined values (ie. remove sort if no sort value specified)
    cleanseData(format);

    let query = pgp.as.format(
      'SELECT ${select:name} FROM ${model:name} ',
      format
    );

    if (join && using) {
      query += pgp.as.format('JOIN ${join:raw} USING (${using:raw}) ', format);
    }
    console.log(query.red);

    // // Copy req.query, if any
    const reqQuery = { ...req.query };

    // // Query fields to exclude from reqQuery
    const removeFields = ['select', 'sort', 'page', 'limit'];

    // // Remove fields from reqQuery
    removeFields.forEach(field => delete reqQuery[field]);

    let filterQuery = '';

    if (Object.keys(reqQuery).length !== 0) {
      filterQuery += 'WHERE ';
      for (let [key, value] of Object.entries(reqQuery)) {
        const mappedFilter = {
          key,
          value: value.split(',').map(str => str.split(/'/).join('')), // remove all ' for pgp formatter to parse into sql
        };

        filterQuery += pgp.as.format(
          '${key:name} IN (${value:csv}) AND ',
          mappedFilter
        );
      }
      filterQuery = filterQuery.slice(0, filterQuery.lastIndexOf('AND '));
    }
    format.filterQuery = filterQuery;

    query += filterQuery;

    // Handle sort
    if (format.sort) {
      query += 'ORDER BY ${sort:name} ';
    }

    // start and end entry number for a page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    format.startIndex = startIndex;

    const totalEntries = await db.one(
      'SELECT COUNT(*) FROM ${model:name} ${filterQuery:raw}',
      format
    );
    const count = parseInt(totalEntries.count);

    query += pgp.as.format('OFFSET ${startIndex} LIMIT ${limit}', format);

    let results = await db.manyOrNone(query, format);

    // Look for id field and generate hashId if non-empty results
    if (results.length !== 0) {
      const id = Object.keys(results[0]).filter(key => key.includes('_id'));
      // if there is at least one id field and select is '*', generate its corresponding hashId using the first id attribute in the table
      if (id.length !== 0 && select === '*') {
        results.map(res => (res['hashId'] = hashEncode(res[id[0]])));
      }
    }

    // Pagination results
    const pagination = {};

    if (endIndex < count) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    res.advancedResults = {
      success: true,
      count,
      pagination,
      data: results,
    };

    next();
  });

module.exports = advancedResults;
