const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const asyncHandler = require('../middleware/async');

// TODO: find out if loading dotenv config in non server/index.js file is good practice, else try pre-loading dotenv files on start-up
// see: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// and: https://dev.to/numtostr/environment-variables-in-node-js-the-right-way-15ad
dotenv.config({ path: 'config/config.env' });

//configuring the AWS environment
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION,
});

const s3 = new AWS.S3();

/**
 * Upload file located at app directory's file path to S3 bucket with folder name
 * @param {*} destFolder path to folder where file will be stored
 * @param {*} filePath path where input file is found
 * @returns URL where file is uploaded to
 */
const uploadToS3 = async (destFolder, filePath) => {
  try {
    //configuring parameters
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Body: fs.readFileSync(filePath),
      Key: destFolder + '/' + Date.now() + '_' + path.basename(filePath),
    };
    const upload = await s3.upload(params).promise();
    console.log(upload);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { uploadToS3 };
