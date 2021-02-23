import { s3ClientService } from '../services/s3Client.service';

export const deleteFileFromBucket = async (filename: string) => {
    let results;
    const urlBeginning = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_REGION}.amazonaws.com/`;

    if (!filename.startsWith(urlBeginning)) {
        results = 'File not hosted on AWS bucket.';
        return results;
    }
    const key = filename.split(urlBeginning)[1];

    results = await s3ClientService.deleteFileFromPublicRead(key);

    return results;
};
