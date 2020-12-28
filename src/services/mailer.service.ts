import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

type EmailAddressOptions = {
    name: string;
    address: string;
};
interface SendEmailOptions {
    fromEmail: string | EmailAddressOptions;
    toEmail: string | EmailAddressOptions;
    subject: string;
    text?: string;
    html?: string;
    ccEmail?: string | EmailAddressOptions;
    bccEmail?: string | EmailAddressOptions;
    attachments?: Mail.Attachment[];
    headers?: Mail.Headers;
}

export class MailerService {
    private readonly mailClient: Mail;

    constructor() {
        const transporterOptions: SMTPTransport.Options = {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        };
        this.mailClient = nodemailer.createTransport(transporterOptions);
    }

    get getMailClient() {
        return this.mailClient;
    }

    async sendEmail(options: SendEmailOptions) {
        const mailContent: Mail.Options = {
            from: options.fromEmail,
            to: options.toEmail,
            cc: options.ccEmail,
            bcc: options.bccEmail,
            subject: options.subject,
            text: options.text,
            html: options.html,
            attachments: options.attachments,
            headers: options.headers,
        };

        return this.mailClient.sendMail(mailContent);
    }
}

export const mailerService = new MailerService();
