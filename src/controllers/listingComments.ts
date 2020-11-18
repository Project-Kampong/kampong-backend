import moment from 'moment-timezone';
import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOrCommentOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all listing comments for a listing
 * @route   GET /api/listings/:listing_id/listing-comments
 * @desc    Get all listing comments for a user
 * @route   GET /api/users/:user_id/listing-comments
 * @access  Public
 */
export const getListingComments = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingview WHERE listing_id = $1', req.params.listing_id);

        const listingComments = await db.manyOrNone('SELECT * FROM listingcommentview WHERE listing_id = $1', req.params.listing_id);

        return res.status(200).json({
            success: true,
            count: listingComments.length,
            data: listingComments,
        });
    }

    if (req.params.user_id) {
        // return 404 error response if user not found
        await db.one('SELECT * FROM Users WHERE user_id = $1', req.params.user_id);

        const listingComments = await db.manyOrNone('SELECT * FROM listingcommentview WHERE user_id = $1', req.params.user_id);

        return res.status(200).json({
            success: true,
            count: listingComments.length,
            data: listingComments,
        });
    }
    return next(new ErrorResponse('Invalid route', 404));
});

/**
 * @desc    Get single listing comment and all its children comments (identified by listing comment id)
 * @route   GET /api/listing-comments/:id/children
 * @access  Public
 */
export const getListingCommentChildren = asyncHandler(async (req, res) => {
    // 404 if listing comment id does not exist
    const rows = await db.many(
        'WITH RECURSIVE lcinfo AS(SELECT lc.*,p.nickname,p.profile_picture FROM listingcommentview lc LEFT JOIN profile p ON lc.user_id=p.user_id),recurselc AS(SELECT*FROM lcinfo WHERE listing_comment_id=$1 UNION SELECT lc.*FROM lcinfo lc JOIN recurselc rlc ON rlc.listing_comment_id=lc.reply_to_id)SELECT*FROM recurselc ORDER BY created_on ASC',
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

    const rows = await db.one('INSERT INTO listingcomment (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    const isListingOrCommentOwner = await checkListingOrCommentOwner(req.user.user_id, req.params.id);
    // check for non-admin, must be listing owner, else must update own comment only
    if (!(req.user.role === 'admin' || isListingOrCommentOwner)) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const { comment } = req.body;

    const data = {
        comment,
        updated_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    };

    cleanseData(data);

    const updateListingCommentQuery = parseSqlUpdateStmt(data, 'listingcomment', 'WHERE listing_comment_id = $1 RETURNING *', req.params.id);

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
    const isListingOrCommentOwner = await checkListingOrCommentOwner(req.user.user_id, req.params.id);
    // check for non-admin, must be listing owner, else must deactivate own comment only
    if (!(req.user.role === 'admin' || isListingOrCommentOwner)) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const data = {
        deleted_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    };

    const deactivateListingCommentQuery = parseSqlUpdateStmt(data, 'listingcomment', 'WHERE listing_comment_id = $1 RETURNING *', [req.params.id]);

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
    const isListingOrCommentOwner = await checkListingOrCommentOwner(req.user.user_id, req.params.id);
    // check for non-admin, must be listing owner, else must deactivate own comment only
    if (!(req.user.role === 'admin' || isListingOrCommentOwner)) {
        return next(new ErrorResponse(`Not authorised to update other comments in this listing`, 403));
    }

    const rows = await db.one('DELETE FROM listingcomment WHERE listing_comment_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
