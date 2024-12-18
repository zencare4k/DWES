const express = require('express');
const fs = require('fs');
const path = require('path');
const setRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Create notes folder if it doesn't exist
const notesDir = path.join(__dirname, 'notas');
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir);
}

// Middleware to check if notes folder exists
app.use((req, res, next) => {
  if (!fs.existsSync(notesDir)) {
    return res.status(500).json({ message: 'Notes folder does not exist' });
  }
  next();
});

// Set up routes
app.use('/api', setRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});