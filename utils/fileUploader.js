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

const uploadToS3 = filePath => {
  //configuring parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Body: fs.readFileSync(filePath),
    Key: 'folder/' + Date.now() + '_' + path.basename(filePath),
  };
  const data = s3.upload(params, (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });
  console.log(data);
};

module.exports = { uploadToS3 };
