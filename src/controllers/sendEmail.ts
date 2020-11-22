import { sendEmail } from '../utils';
import { asyncHandler } from '../middleware';

export const sendEmailUtil = asyncHandler(async (req, res, next) => {
    const { receiverEmail, senderEmail, subject, message } = req.body;

    await sendEmail({
        email: receiverEmail,
        cc: senderEmail,
        subject,
        message,
    });

    res.status(200).json({
        success: true,
        data: {},
    });
});
