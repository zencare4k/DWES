const express = require('express');
const NotesController = require('../controllers/notesController');
const { verifyToken, isAdmin } = require('../utils/auth');

const router = express.Router();
const notesController = new NotesController();

const setRoutes = (app) => {
  router.post('/notes', verifyToken, notesController.createNote.bind(notesController));
  router.put('/notes/:id', verifyToken, notesController.editNote.bind(notesController));
  router.delete('/notes/:id', verifyToken, isAdmin, notesController.deleteNote.bind(notesController));
  router.get('/notes', verifyToken, notesController.getNotes.bind(notesController));

  app.use('/api', router);
};

module.exports = setRoutes;