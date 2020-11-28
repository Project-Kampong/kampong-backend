import { S3 } from 'aws-sdk';

export class S3ClientService {
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

    async uploadFileToPublicRead(file: Buffer, key: string, meta?: { [key: string]: string }) {
        const uploadParams = { Bucket: process.env.S3_BUCKET_NAME, Key: key, Body: file, ACL: 'public-read', Metadata: meta };
        return this.s3Client.upload(uploadParams).promise();
    }
}

export const s3ClientService = new S3ClientService();
