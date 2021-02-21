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
        const uploadParams: S3.PutObjectRequest = { Bucket: process.env.S3_BUCKET_NAME, Key: key, Body: file, ACL: 'public-read', Metadata: meta };
        return this.s3Client.upload(uploadParams).promise();
    }

    async uploadFileToBackupBucket(file: Buffer, key: string, meta?: { [key: string]: string }): Promise<S3.ManagedUpload.SendData> {
        const uploadParams: S3.PutObjectRequest = { Bucket: process.env.S3_BACKUP_BUCKET_NAME, Key: key, Body: file, ACL: 'private', Metadata: meta };
        return this.s3Client.upload(uploadParams).promise();
    }

    async deleteFileFromPublicRead(key: string) {
        const deleteParams: S3.DeleteObjectRequest = { Bucket: process.env.S3_BUCKET_NAME, Key: key }
        return this.s3Client.deleteObject(deleteParams).promise();
    }
}

export const s3ClientService = new S3ClientService();
