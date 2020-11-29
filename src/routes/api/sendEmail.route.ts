import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { INVALID_EMAIL_MSG, INVALID_FIELD_MSG } from '../../utils';
import { checkInputError, protect } from '../../middleware';

// Import sendEmail controller
import { sendEmailUtil } from '../../controllers/sendEmail';

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
    check('message', INVALID_FIELD_MSG('email message')).notEmpty(),
];

// Routes below allowed for authenticated users only
router.use(protect);

// Map route to controller
router.route('/').post(validateEmail, checkInputError, sendEmailUtil);
