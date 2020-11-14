import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, checkInputError, protect, authorise } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { FaqsController } from '../../controllers/faqs';

const faqsController = new FaqsController();

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

router.route('/').get(advancedResults('faqs'), faqsController.getFaqs);
router.route('/:id').get(faqsController.getFaq);

// all routes below only accessible to admin
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router.route('/').post(validateCreateFaqFields, checkInputError, faqsController.createFaq);

router.route('/:id').put(validateUpdateFaqFields, checkInputError, faqsController.updateFaq).delete(faqsController.deleteFaq);
