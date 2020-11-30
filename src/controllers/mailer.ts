import { MailerService } from '../services/mailer.service';

export class MailerController {
    constructor(private readonly mailService: MailerService) {
        this.mailService = mailService;
    }
    sendEmailGeneric = async (req, res) => {
        const { receiverEmail, senderEmail, subject, message } = req.body;

        await this.mailService.sendEmail({
            fromEmail: senderEmail,
            toEmail: receiverEmail,
            ccEmail: senderEmail,
            subject,
            text: message,
        });

        res.sendStatus(204);
    };
}
