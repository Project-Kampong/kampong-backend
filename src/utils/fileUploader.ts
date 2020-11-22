import moment from 'moment-timezone';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3ClientService } from '../services/s3Client.service';

export const uploadFile = multer({
    storage: multerS3({
        s3: s3ClientService,
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
