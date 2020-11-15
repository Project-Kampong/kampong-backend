import aws from 'aws-sdk';
import dotenv from 'dotenv';
import moment from 'moment-timezone';
import multer from 'multer';
import multerS3 from 'multer-s3';

// TODO: find out if loading dotenv config in non server/index.js file is good practice, else try pre-loading dotenv files on start-up
// see: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// and: https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad
dotenv.config({ path: 'config/config.env' });

//configuring the AWS environment
aws.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.S3_REGION,
});

const s3 = new aws.S3();

export const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {
                filename: file.originalname,
                uploaded_on: moment.tz(process.env.DEFAULT_TIMEZONE).format(),
            });
        },
        key: (req, file, cb) => {
            const strArr = file.originalname.split('.');
            cb(null, strArr.shift() + '-' + Date.now().toString() + '.' + strArr.join('.'));
        },
    }),
});
