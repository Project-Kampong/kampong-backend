import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { checkInputError, protect, authorise } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getFaqsForListing, createFaq, updateFaq, deleteFaq } from '../../controllers/faqs';

// input validation chain definition
const validateCreateFaqFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('question', INVALID_FIELD_MSG('question')).trim().notEmpty(),
    check('answer').optional().trim(),
];

const validateUpdateFaqFields = [
    oneOf([check('question').exists(), check('answer').exists()], NO_FIELD_UPDATED_MSG),
    check('question', INVALID_FIELD_MSG('question')).optional().trim().notEmpty(),
    check('answer').optional().trim(),
];

router.route('/').get(getFaqsForListing);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(validateCreateFaqFields, checkInputError, createFaq);

router.route('/:id').put(validateUpdateFaqFields, checkInputError, updateFaq).delete(deleteFaq);
