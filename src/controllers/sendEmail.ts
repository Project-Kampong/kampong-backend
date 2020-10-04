import { sendEmail } from '../utils';
import { asyncHandler } from '../middleware';

export const sendEmailUtil = asyncHandler(async (req, res, next) => {
    const { receiverEmail, senderEmail, subject, messsage } = req.body;

    await sendEmail({
        email: receiverEmail,
        cc: senderEmail,
        subject,
        messsage,
    });

    res.status(200).json({
        success: true,
        data: {},
    });
});
