import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { INVALID_EMAIL_MSG } from '../../utils/inputExceptionMsg';
import { checkInputError } from '../../middleware/inputValidation';

// Import sendEmail controller
import { sendEmailUtil } from '../../controllers/sendEmail';
import { protect } from 'src/middleware';

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail(),
];

// Routes below allowed for authenticated users only
router.use(protect);

// Map route to controller
router.route('/').post(validateEmail, checkInputError, sendEmailUtil);
