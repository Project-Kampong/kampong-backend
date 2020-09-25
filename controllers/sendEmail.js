const { sendEmail, ErrorResponse } = require('../utils');
const { asyncHandler } = require('../middleware');

exports.sendEmail = asyncHandler(async (req, res, next) => {
    const { receiverEmail, senderEmail, subject, messsage } = req.body;

    await sendEmail({
        email: receiverEmail,
        cc: senderEmail,
        subject,
        messsage
    });

    res.status(200).json({
        success: true,
        data: {}
    });
});
