import { S3 } from 'aws-sdk';

export class S3ClientService {
    private readonly s3Client: S3;

    constructor() {
        const s3Config = {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION,
        };
        this.s3Client = new S3(s3Config);
    }

    get getS3Client(): S3 {
        return this.s3Client;
    }

    async uploadFileToPublicRead(file: Buffer, key: string, meta?: { [key: string]: string }): Promise<S3.ManagedUpload.SendData> {
        const uploadParams = { Bucket: process.env.S3_BUCKET_NAME, Key: key, Body: file, ACL: 'public-read', Metadata: meta };
        return this.s3Client.upload(uploadParams).promise();
    }
}

export const s3ClientService = new S3ClientService();
