import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import { isEmpty } from 'lodash';
import { mailerService, MailerService } from '../services/mailer.service';
import { db } from '../database';

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
        const { subject, message } = req.body;
        const { user_id } = req.user;

        const sender = db.one('SELECT * FROM profile WHERE user_id = $1', user_id);

        const { nickname, phone } = sender;

        const parsedSenderNumber = !isEmpty(phone) ? phone : 'Not provided';

        const templateVariables = {
            receiverUsername,
            senderUsername,
            projectTitle,
            phone,
            senderEmail,
            senderMessage: message,
        };

        const pathToTemplate = path.resolve(__dirname, '../../public/templates/email/enquiry-template.html');
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

    sendApplicationEmail = async (req, res) => {
        const { subject, message, roleApplied } = req.body;

        const parsedSenderNumber = !isEmpty(senderNumber) ? senderNumber : 'Not provided';

        const templateVariables = {
            receiverUsername,
            senderUsername,
            projectTitle,
            senderNumber: parsedSenderNumber,
            senderEmail,
            senderMessage: message,
            roleApplied,
        };

        const pathToTemplate = path.resolve(__dirname, '../../public/templates/email/apply-template.html');
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
