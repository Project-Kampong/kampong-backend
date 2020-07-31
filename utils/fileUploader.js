const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

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
 * @param {*} destFolder
 * @param {*} filePath
 * @returns URL where file is uploaded to
 */
const uploadToS3 = (destFolder, filePath) => {
  //configuring parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Body: fs.readFileSync(filePath),
    Key: destFolder + '/' + Date.now() + '_' + path.basename(filePath),
  };
  s3.upload(params, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(
      `File uploaded to: ${JSON.stringify(data, null, 2)}`.blue.inverse
    );
    return data.Location;
  });
};

module.exports = { uploadToS3 };
