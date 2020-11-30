import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { INVALID_EMAIL_MSG, INVALID_FIELD_MSG } from '../../utils';
import { asyncHandler, checkInputError, protect } from '../../middleware';
import { mailerService } from '../../services/mailer.service';

// Import mailer controller
import { MailerController } from '../../controllers/mailer';
const mailerController = new MailerController(mailerService);

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
    check('message', INVALID_FIELD_MSG('email message')).notEmpty(),
    check('subject', INVALID_FIELD_MSG('email subject')).notEmpty(),
];

// Routes below allowed for authenticated users only
router.use(protect);

// Map route to controller
router.route('/send').post(validateEmail, checkInputError, asyncHandler(mailerController.sendEmailGeneric));
