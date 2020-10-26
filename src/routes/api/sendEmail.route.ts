import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { INVALID_EMAIL_MSG } from '../../utils/inputExceptionMsg';
import { checkInputError } from '../../middleware/inputValidation';

// Import sendEmail controller
import { sendEmailUtil } from '../../controllers/sendEmail';

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
];

// Map route to controller
router.route('/').post(validateEmail, checkInputError, sendEmailUtil);
