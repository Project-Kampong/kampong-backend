import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { INVALID_EMAIL_MSG, INVALID_FIELD_MSG } from '../../utils';
import { asyncHandler, checkInputError, protect } from '../../middleware';

// Import mailer controller
import { mailerController } from '../../controllers/mailer';

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
    check('message', INVALID_FIELD_MSG('email message')).notEmpty(),
    check('subject', INVALID_FIELD_MSG('email subject')).notEmpty(),
];

const validateEnquiryEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
    check('subject', INVALID_FIELD_MSG('email subject')).notEmpty(),
    check('receiverUsername', INVALID_FIELD_MSG('receiverUsername')).notEmpty(),
    check('senderUsername', INVALID_FIELD_MSG('senderUsername')).notEmpty(),
    check('projectTitle', INVALID_FIELD_MSG('projectTitle')).notEmpty(),
    check('senderMessage', INVALID_FIELD_MSG('senderMessage')).notEmpty(),
];

// Routes below allowed for authenticated users only
router.use(protect);

// Map route to controller
router.route('/send').post(validateEmail, checkInputError, asyncHandler(mailerController.sendEmailGeneric));
router.route('/send-enquiry').post(validateEnquiryEmail, checkInputError, asyncHandler(mailerController.sendEnquiryEmail));
