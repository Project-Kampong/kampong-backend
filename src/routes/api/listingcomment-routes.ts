import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
const { advancedResults, checkInputError, protect } = require('../../middleware');
const { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG, INVALID_TIMESTAMP_MSG } = require('../../utils');

// import controllers here
const {
    getListingComments,
    getListingComment,
    getListingCommentChildren,
    createListingComment,
    updateListingComment,
    deleteListingComment,
    deactivateListingComment,
} = require('../../controllers/listingcomments');

// Define input validation chain
const validateCreateListingCommentFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('comment', INVALID_FIELD_MSG('comment')).trim().notEmpty(),
    check('reply_to_id', INVALID_TIMESTAMP_MSG('reply to id')).optional().isInt(),
];

const validateUpdateListingCommentFields = [
    oneOf([check('comment').exists()], NO_FIELD_UPDATED_MSG),
    check('comment', INVALID_FIELD_MSG('comment')).optional().trim().notEmpty(),
];

router.route('/').get(advancedResults('listingcommentsview'), getListingComments);
router.route('/:id').get(getListingComment);
router.route('/:id/children').get(getListingCommentChildren);

// all routes below only accessible to authenticated user
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateListingCommentFields, checkInputError, createListingComment);

router.route('/:id').put(validateUpdateListingCommentFields, checkInputError, updateListingComment).delete(deleteListingComment);

router.route('/:id/deactivate').put(deactivateListingComment);
