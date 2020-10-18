import moment from 'moment';
import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all listing comments
 * @route   GET /api/listing-comments
 * @desc    Get all listing comments for a listing
 * @route   GET /api/listings/:listing_id/listing-comments
 * @desc    Get all listing comments for a user
 * @route   GET /api/users/:user_id/listing-comments
 * @access  Public
 */
export const getListingComments = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.listing_id);

        const listingComments = await db.manyOrNone('SELECT * FROM ListingCommentsView WHERE listing_id = $1', req.params.listing_id);

        return res.status(200).json({
            success: true,
            count: listingComments.length,
            data: listingComments,
        });
    }

    if (req.params.user_id) {
        // return 404 error response if user not found
        await db.one('SELECT * FROM Users WHERE user_id = $1', req.params.user_id);

        const listingComments = await db.manyOrNone('SELECT * FROM ListingCommentsView WHERE user_id = $1', req.params.user_id);

        return res.status(200).json({
            success: true,
            count: listingComments.length,
            data: listingComments,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing comment (identified by listing comment id)
 * @route   GET /api/listing-comments/:id
 * @access  Public
 */
export const getListingComment = asyncHandler(async (req, res) => {
    const rows = await db.one(
        'SELECT lc.*, p.nickname, p.profile_picture FROM ListingComments lc LEFT JOIN Profiles p ON lc.user_id = p.user_id WHERE listing_comment_id = $1',
        req.params.id,
    );

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Get single listing comment and all its children comments (identified by listing comment id)
 * @route   GET /api/listing-comments/:id/children
 * @access  Public
 */
export const getListingCommentChildren = asyncHandler(async (req, res) => {
    // 404 if listing comment id does not exist
    const rows = await db.many(
        'WITH RECURSIVE lcinfo AS(SELECT lc.*,p.nickname,p.profile_picture FROM ListingComments lc LEFT JOIN Profiles p ON lc.user_id=p.user_id),recurselc AS(SELECT*FROM lcinfo WHERE listing_comment_id=$1 UNION SELECT lc.*FROM lcinfo lc JOIN recurselc rlc ON rlc.listing_comment_id=lc.reply_to_id)SELECT*FROM recurselc',
        req.params.id,
    );

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Add comment to listing
 * @route   POST /api/listing-comments
 * @access  Private
 */
export const createListingComment = asyncHandler(async (req, res, next) => {
    const { listing_id, comment, reply_to_id } = req.body;

    const data = {
        listing_id,
        user_id: req.user.user_id,
        comment,
        reply_to_id,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO ListingComments (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single listing comment (identified by listing comment id)
 * @route   PUT /api/listing-comments/:id
 * @access  Admin/Owner/Private
 */
export const updateListingComment = asyncHandler(async (req, res, next) => {
    // check for non-admin, must be listing owner, else must update own comment only
    if (!(await isListingOrCommentOwner(req.user, req.params.id))) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const { comment } = req.body;

    const data = {
        comment,
        updated_on: moment().format('YYYY-MM-DD HH:mm:ss.000'),
    };

    cleanseData(data);

    const updateListingCommentQuery = parseSqlUpdateStmt(data, 'listingcomments', 'WHERE listing_comment_id = $1 RETURNING *', req.params.id);

    const rows = await db.one(updateListingCommentQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Deactivate (soft delete) single listing comment (identified by listing comment id)
 * @route   PUT /api/listings-comments/:id/deactivate
 * @access  Admin/Owner/Private
 */
export const deactivateListingComment = asyncHandler(async (req, res, next) => {
    // check for non-admin, must be listing owner, else must update own comment only
    if (!(await isListingOrCommentOwner(req.user, req.params.id))) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const data = {
        deleted_on: moment().format('YYYY-MM-DD HH:mm:ss.000'),
    };

    const deactivateListingCommentQuery = parseSqlUpdateStmt(data, 'listingcomments', 'WHERE listing_comment_id = $1 RETURNING $2:name', [
        req.params.id,
        data,
    ]);

    const rows = await db.one(deactivateListingCommentQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single listing comment (identified by listing comment id)
 * @route   DELETE /api/listing-comments/:id
 * @access  Admin/Owner/Private
 */
export const deleteListingComment = asyncHandler(async (req, res, next) => {
    // check for non-admin, must be listing owner, else must update own comment only
    if (!(await isListingOrCommentOwner(req.user, req.params.id))) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const rows = await db.one('DELETE FROM ListingComments WHERE listing_comment_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

// Returns true if is admin, listing, or comment owner
const isListingOrCommentOwner = async (reqUser, listingCommentId) => {
    const role = reqUser.role;
    const userId = reqUser.user_id;

    if (role === 'admin') {
        return true;
    }
    const listingInfo = await db.one(
        'SELECT created_by, user_id FROM ListingComments lc JOIN Listings l USING (listing_id) WHERE listing_comment_id = $1',
        listingCommentId,
    );
    if (listingInfo.created_by !== userId && listingInfo.user_id !== userId) {
        return false;
    }
    return true;
};
