const asyncHandler = require('./async');
const { db } = require('../config/db');
const { cleanseData } = require('../utils/dbHelper');

/**
 * Handles select, sort, page, limit and filter request queries.
 * Request queries begin with '?' and separated by '&'
 * For select and sort queries, multiple values must be separated
 * by commas, and in the order to be parsed as SQL query statements.
 * In current implementation, filter queries can only check for exact
 * matches, and each attribute can only be matched to max 1 value.
 * Sample request query. ?select=name,password&sort=name,user_role&page=2&limit=2&name='Ron'
 * @param {String} model name of SQL table to query
 */
const advancedResults = model =>
  asyncHandler(async (req, res, next) => {
    // console.log(req.query);
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
      limit
    };

    // remove undefined values (ie. remove sort if no sort value specified)
    cleanseData(format);
    // console.log(format);

    let query = 'SELECT ${select:name} FROM ${model:name} ';

    // // Copy req.query, if any
    // const reqQuery = { ...req.query };

    // // Query fields to exclude from reqQuery
    // const removeFields = ['select', 'sort', 'page', 'limit'];

    // // Remove fields from reqQuery
    // removeFields.forEach(field => delete reqQuery[field]);

    let filterQuery = '';

    // if (Object.keys(reqQuery).length !== 0) {
    //   filterQuery += `WHERE `;
    //   for (let [key, value] of Object.entries(reqQuery)) {
    //     filterQuery += `${key} = ${value} AND `;
    //   }
    //   filterQuery = filterQuery.slice(0, filterQuery.lastIndexOf('AND '));
    // }

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
      { model, filterQuery }
    );

    query += 'OFFSET ${startIndex} LIMIT ${limit}';

    const results = await db.manyOrNone(query, format);

    // Pagination results
    const pagination = {};

    if (endIndex < totalEntries.count) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.advancedResults = {
      success: true,
      count: results.length,
      pagination,
      data: results
    };

    next();
  });

module.exports = advancedResults;
