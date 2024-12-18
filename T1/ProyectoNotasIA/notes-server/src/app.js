const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/notesRoutes');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
setRoutes(app);

// Error handling middleware
app.use(errorHandler);

module.exports = app;