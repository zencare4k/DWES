const express = require('express');
const dotenv = require('dotenv');
const app = require('./app');
const logger = require('./utils/logger');

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    logger.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
  logger.info(`Server is running on port ${PORT}`);
});