const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { checkConn } = require('./config/db');
const apiRoutes = require('./routes/api-routes');
const errorHandler = require('./middleware/error');
const { uploadToS3 } = require('./utils/fileUploader');

dotenv.config({ path: 'config/config.env' });

// Init express
const app = express();

// Check connection to db
checkConn();

// Express json parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api', apiRoutes);

// Mount error handler
app.use(errorHandler);

// For testing fileUploader only. Remove once done with testing
// uploadToS3('test', './utils/auth.js');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled Error: ${err.message}`.bgRed);
  // Close server & exit process
  server.close(() => process.exit(1));
});
