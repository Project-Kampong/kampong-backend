const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const { checkConn } = require('./config/db');
const apiRoutes = require('./routes/api-routes');

dotenv.config({ path: 'config/config.env' });

// Init express
const app = express();

// Check connection to db
checkConn();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api', apiRoutes);

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
