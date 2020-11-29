import { SQS } from 'aws-sdk';

class SQSClientService {
    private readonly sqsClient: SQS;

    constructor() {
        const sqsConfig = {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION,
        };
        this.sqsClient = new SQS(sqsConfig);
    }

    get getSQSClient() {
        return this.sqsClient;
    }
}

export const sqsClientService = new SQSClientService();
