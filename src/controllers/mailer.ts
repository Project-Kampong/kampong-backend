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
        const { subject, message, listingId } = req.body;
        const { user_id } = req.user;

        const { email: senderEmail, nickname: senderUsername, phone } = await db.one<Promise<{ email: string; nickname: string; phone: string }>>(
            'SELECT email, nickname, phone FROM loginuser JOIN profile USING (user_id) WHERE user_id = $1',
            user_id,
        );

        const { listing_title: projectTitle, listing_email: receiverEmail } = await db.one<Promise<{ listing_title: string; listing_email: string }>>(
            'SELECT listing_title, listing_email FROM listingview where listing_id = $1',
            listingId,
        );

        const parsedSubject = `Kampong: ${projectTitle} Enquiry - ${subject}`;

        const parsedSenderNumber = !isEmpty(phone) ? phone : 'Not provided';

        const templateVariables = {
            senderUsername,
            projectTitle,
            phone: parsedSenderNumber,
            senderEmail,
            message,
        };

        const pathToTemplate = path.resolve(__dirname, '../../public/templates/email/enquiry-template.html');
        const htmlMessage = this.generateHtmlMessage(pathToTemplate, templateVariables);

        await this.mailService.sendEmail({
            fromEmail: senderEmail,
            toEmail: receiverEmail,
            ccEmail: senderEmail,
            subject: parsedSubject,
            html: htmlMessage,
        });

        res.sendStatus(204);
    };

    sendApplicationEmail = async (req, res) => {
        const { listingId, roleApplied } = req.body;
        const { user_id } = req.user;

        const { email: senderEmail, nickname: senderUsername, phone } = await db.one<Promise<{ email: string; nickname: string; phone: string }>>(
            'SELECT email, nickname, phone FROM loginuser JOIN profile USING (user_id) WHERE user_id = $1',
            user_id,
        );

        const { listing_title: projectTitle, listing_email: receiverEmail } = await db.one<Promise<{ listing_title: string; listing_email: string }>>(
            'SELECT listing_title, listing_email FROM listingview where listing_id = $1',
            listingId,
        );

        const subject = `Kampong: ${projectTitle} Application for ${roleApplied}`;

        const parsedSenderNumber = !isEmpty(phone) ? phone : 'Not provided';

        const templateVariables = {
            senderUsername,
            projectTitle,
            phone: parsedSenderNumber,
            senderEmail,
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
