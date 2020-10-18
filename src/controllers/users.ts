import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, hashPassword, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Admin
 */
export const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single user
 * @route   GET /api/users/:id
 * @access  Admin
 */
export const getUser = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM users WHERE user_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create user and associated user profile
 * @route   POST /api/users
 * @access  Admin
 */
export const createUser = asyncHandler(async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const data = {
        user_id: uuidv4(),
        first_name,
        last_name,
        email,
        password: await hashPassword(password),
    };

    const nickname = last_name ? first_name + ' ' + last_name : first_name;

    /**
     * SQL Transaction, creating user and associated user profile
     * Returns an array of 2 json:
     * 1st json: User auth
     * 2nd json: User profile
     */
    const rows = await db.tx(async (query) => {
        const createUser = await query.one('INSERT INTO users (${this:name}) VALUES (${this:csv}) RETURNING *', data);
        const createProfile = await query.one('INSERT INTO profiles (user_id, nickname) VALUES ($1, $2) RETURNING *', [createUser.user_id, nickname]);
        return query.batch([createUser, createProfile]);
    });

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single user
 * @route   PUT /api/users/:id
 * @access  Admin
 */
export const updateUser = asyncHandler(async (req, res, next) => {
    // check if user exists
    const isValidUser = await db.oneOrNone('SELECT * FROM users WHERE user_id = $1', req.params.id);

    // return bad request response if invalid user
    if (!isValidUser) {
        return next(new ErrorResponse(`User does not exist`, 400));
    }

    const { first_name, last_name, email, password } = req.body;

    const data = {
        first_name,
        last_name,
        email,
        password,
    };

    cleanseData(data);

    if (data.password) {
        const hashedPassword = await hashPassword(data.password);
        data.password = hashedPassword;
    }

    const updateUserQuery = parseSqlUpdateStmt(data, 'users', 'WHERE user_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateUserQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single user
 * @route   DELETE /api/users/:id
 * @access  Admin
 */
export const deleteUser = asyncHandler(async (req, res, next) => {
    // check if user exists
    await db.one('SELECT * FROM users WHERE user_id = $1', req.params.id);

    const rows = await db.tx(async (query) => {
        const deleteProfile = query.one('DELETE FROM profiles WHERE user_id = $1 RETURNING *', req.params.id);

        const deleteUser = query.one('DELETE FROM users WHERE user_id = $1 RETURNING *', req.params.id);
        return await query.batch([deleteUser, deleteProfile]);
    });

    res.status(200).json({
        success: true,
        data: rows,
    });
});
