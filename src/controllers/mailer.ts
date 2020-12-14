import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import { isEmpty } from 'lodash';
import { MailerService } from '../services/mailer.service';
import { mailerService } from '../services/mailer.service';

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

    sendEnquiryEmail = async (req, res) => {
        const { receiverEmail, senderEmail, subject, receiverUsername, senderUsername, projectTitle, senderNumber, senderMessage } = req.body;

        const parsedSenderNumber = !isEmpty(senderNumber) ? senderNumber : 'Not provided';

        const templateVariables = {
            receiverUsername,
            senderUsername,
            projectTitle,
            senderNumber: parsedSenderNumber,
            senderEmail,
            senderMessage,
        };

        const pathToTemplate = path.resolve(__dirname, '../templates/email/enquiry-template.html');
        const htmlMessage = this.generateHtmlMessage(pathToTemplate, templateVariables);

        await this.mailService.sendEmail({
            fromEmail: senderEmail,
            toEmail: receiverEmail,
            ccEmail: senderEmail,
            subject,
            html: htmlMessage,
        });

        res.sendStatus(204);
    };

    private generateHtmlMessage = (pathToTemplate: string, templateVariables: { [key: string]: string }): string => {
        const templateFile = fs.readFileSync(pathToTemplate, { encoding: 'utf-8' });
        const template = handlebars.compile(templateFile);
        return template(templateVariables);
    };
}

export const mailerController = new MailerController(mailerService);
