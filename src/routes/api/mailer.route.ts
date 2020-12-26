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
    check('message', INVALID_FIELD_MSG('email message')).notEmpty(),
    check('subject', INVALID_FIELD_MSG('email subject')).notEmpty(),
    check('listingId', INVALID_FIELD_MSG('listingId')).isUUID().notEmpty(),
];
const validateApplicationEmail = [
    check('roleApplied', INVALID_FIELD_MSG('role applied')).notEmpty(),
    check('listingId', INVALID_FIELD_MSG('listingId')).isUUID().notEmpty(),
];

// Routes below allowed for authenticated users only
router.use(protect);

// Map route to controller
router.route('/send').post(validateEmail, checkInputError, asyncHandler(mailerController.sendEmailGeneric));
router.route('/send-enquiry').post(validateEnquiryEmail, checkInputError, asyncHandler(mailerController.sendEnquiryEmail));
router.route('/send-application').post(validateApplicationEmail, checkInputError, asyncHandler(mailerController.sendApplicationEmail));
