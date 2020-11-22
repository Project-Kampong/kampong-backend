import { S3 } from 'aws-sdk';

class S3ClientService {
    private readonly s3Client: S3;

    constructor() {
        const s3Config = {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_KEY,
            region: process.env.S3_REGION,
        };
        this.s3Client = new S3(s3Config);
    }

    get getS3Client() {
        return this.s3Client;
    }
}

export const s3ClientService = new S3ClientService().getS3Client;
