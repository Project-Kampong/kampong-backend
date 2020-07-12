const asyncHandler = require('./async');
const { db } = require('../config/db');

/**
 * Handles select, sort, page, limit and filter request queries.
 * Request queries begin with '?' and separated by '&'
 * For select and sort queries, multiple values must be separated
 * by commas, and in the order to be parsed as SQL query statements.
 * In current implementation, filter queries can only check for exact
 * matches, and each attribute can only be matched to max 1 value.
 * Wrapping string values with '' is optional when filtering via
 * string matches.
 * Currently, populate only supports natural join with model.
 * Sample request query. ?select=name,password&sort=name,user_role&page=2&limit=2&name='Ron'
 * @param model:String the table name to query
 * @param populate:String the table name to form a natural join with model
 */
const advancedResults = (model, populate) =>
  asyncHandler(async (req, res, next) => {
    let query = `SELECT `;

    // Handle select queries
    if (req.query.select) {
      query += req.query.select + ' ';
    } else {
      query += `* `;
    }

    // handle model:String
    query += `FROM ${model} `;

    // Populate each entry with natural join
    if (populate) {
      query += `NATURAL JOIN ${populate} `;
    }

    // Copy req.query, if any
    const reqQuery = { ...req.query };

    // Query fields to exclude from reqQuery
    const removeFields = ['select', 'sort', 'page', 'limit'];

    // Remove fields from reqQuery
    removeFields.forEach(field => delete reqQuery[field]);

    let filterQuery = ``;

    if (Object.keys(reqQuery).length !== 0) {
      filterQuery += `WHERE `;
      for (let [key, value] of Object.entries(reqQuery)) {
        if (!(value.startsWith("'") && value.endsWith("'"))) {
          value = `'${value}'`;
        }
        filterQuery += `${key} = ${value} AND `;
      }
      filterQuery = filterQuery.slice(0, filterQuery.lastIndexOf('AND '));
    }

    query += filterQuery;

    // Handle sort
    if (req.query.sort) {
      query += `ORDER BY ${req.query.sort} `;
    }

    // Pagination (default val: 1 page, 25 entries)
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;

    // start and end entry number for a page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalEntries = await db.one(
      `SELECT COUNT(*) FROM ${model} ${filterQuery}`
    );

    query += `OFFSET ${startIndex} LIMIT ${limit}`;

    const results = await db.manyOrNone(query);

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
