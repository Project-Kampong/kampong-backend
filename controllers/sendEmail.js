const { sendEmail, ErrorResponse } = require('../utils');
const { asyncHandler } = require('../middleware');

exports.sendEmail = asyncHandler(async (req, res, next) => {
    const { receiverEmail, senderEmail, subject, messsage } = req.body;

    try {
        await sendEmail({
            email: receiverEmail,
            cc: senderEmail,
            subject,
            messsage
        });
    } catch (err) {
        //return next(new ErrorResponse('Email cound not be sent. Please try again later.', 409));
        return next(err);
    }

    res.status(200).json({
        success: true,
        data: {}
    });
});
