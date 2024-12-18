const express = require('express');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes');
const authRoutes = require('./utils/auth');
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
app.use('/api', notesRoutes);
app.use('/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;