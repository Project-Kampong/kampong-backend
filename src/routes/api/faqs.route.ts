import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { checkInputError, protect, authorise, asyncHandler } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controller
import { faqsController } from '../../controllers/faqs';

// input validation chain definition
const validateCreateFaqFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('question', INVALID_FIELD_MSG('question')).trim().notEmpty(),
];

const validateUpdateFaqFields = [
    oneOf([check('question').exists(), check('answer').exists()], NO_FIELD_UPDATED_MSG),
    check('question', INVALID_FIELD_MSG('question')).optional().trim().notEmpty(),
];

router.route('/').get(asyncHandler(faqsController.getFaqsForListing));

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(validateCreateFaqFields, checkInputError, asyncHandler(faqsController.createFaq));

router
    .route('/:id')
    .put(validateUpdateFaqFields, checkInputError, asyncHandler(faqsController.updateFaq))
    .delete(asyncHandler(faqsController.deleteFaq));
