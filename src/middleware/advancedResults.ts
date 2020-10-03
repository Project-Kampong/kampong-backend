import { asyncHandler } from './async';
import { db, pgp } from '../database/db';
import { cleanseData } from '../utils';
import { isString, get } from 'lodash';

/**
 * Handles select, sort, page, limit and filter request query params.
 * Request query params begin with '?' and separated by '&'
 * 2 additional arguments, join, and on, allow joins to be formed
 * given the table to be joined on, and the column common to both table to join on.
 * For select queries, multiple values must be separated
 * by commas, and in the order to be parsed as SQL query statements.
 * Sort query:
 * Max 1 field can be sorted, and sort order is indicated by a
 * whitespace after the sort field with the keyword 'asc' or 'desc' (without single quotes).
 * Will default to 'asc' if any value other than desc is given
 * Filter query:
 * In current implementation, filter queries can check for exact
 * matches on multiple values (separated by single ',').
 * In checking for string matches, it is optional to use ' to enclose string values as they will be ignored.
 * Sample request query. ?select=name,password&sort=name desc&page=2&limit=2&name='Ron'
 * @param {String} model name of SQL table to query
 * @param {String} join name of SQL table to form an SQL join with (optional)
 * @param {String} on column name common to both table to form an SQL join on (required if join is provided)
 */
export const advancedResults = (model: string, join?: string, on?: string) =>
    asyncHandler(async (req, res, next) => {
        let { select, sort, page = 1, limit = 25 } = req.query;
        select = select ? select.split(',') : '*';
        sort = isString(sort) ? parseSort(sort) : sort;
        page = parseInt(page);
        limit = parseInt(limit);

        const format: { [key: string]: any } = {
            select,
            model,
            sort,
            page,
            limit,
            join,
            on,
        };

        // remove undefined values (eg. remove sort if no sort value specified)
        cleanseData(format);

        let query = pgp.as.format('SELECT ${select:name} FROM ${model:name} ', format);

        if (join && on) {
            query += pgp.as.format('JOIN ${join:raw} ON (${model:raw}.${on:raw} = ${join:raw}.${on:raw}) ', format);
        }

        // Copy req.query, if any
        const reqQuery: { [key: string]: any } = { ...req.query };

        // Query fields to exclude from reqQuery
        const removeFields = ['select', 'sort', 'page', 'limit'];

        // Remove fields from reqQuery
        removeFields.forEach((field) => delete reqQuery[field]);

        // Handle WHERE clause of SQL statement
        let filterQuery = '';

        if (Object.keys(reqQuery).length !== 0) {
            filterQuery += 'WHERE ';
            for (const [key, value] of Object.entries(reqQuery)) {
                const mappedFilter = {
                    key,
                    value: value.split(',').map((str) => str.split(/'/).join('')), // remove all ' for pgp formatter to parse into sql
                };

                filterQuery += pgp.as.format('${key:name} IN (${value:csv}) AND ', mappedFilter);
            }
            filterQuery = filterQuery.slice(0, filterQuery.lastIndexOf('AND '));
        }
        format.filterQuery = filterQuery;

        query += filterQuery;

        // Handle sort
        if (format.sort) {
            query += 'ORDER BY ${sort.field:name} ${sort.order:raw} ';
        }

        // start and end entry number for a page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        format.startIndex = startIndex;

        const totalEntries = await db.one('SELECT COUNT(*) FROM ${model:name} ${filterQuery:raw}', format);
        const count = parseInt(totalEntries.count);

        query += pgp.as.format('OFFSET ${startIndex} LIMIT ${limit}', format);

        const results = await db.manyOrNone(query, format);

        // Pagination results
        const pagination: { [key: string]: any } = {};

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

const parseSort = (rawSortStr) => {
    const sortAndOrderArr = rawSortStr.split(' ');
    const orderStr = get(sortAndOrderArr, '1', 'asc');
    const order = orderStr === 'desc' ? 'DESC' : 'ASC';
    return {
        field: sortAndOrderArr[0],
        order,
    };
};
