const express = require('express');
const router = express.Router({ mergeParams: true });
const { check } = require('express-validator');
const { INVALID_EMAIL_MSG } = require('../../utils/inputExceptionMsg');
const { checkInputError } = require('../../middleware/inputValidation');

// Import sendEmail controller
const { sendEmail } = require('../../controllers/sendEmail');

// Validate input email
const validateEmail = [
    check('senderEmail', INVALID_EMAIL_MSG).optional().isEmail().normalizeEmail(),
    check('receiverEmail', INVALID_EMAIL_MSG).notEmpty().isEmail().normalizeEmail()
];

// Map route to controller
router.route('/').post(validateEmail, checkInputError, sendEmail);

module.exports = router;
