const express = require('express');
const NotesController = require('../controllers/notesController');
const NotesService = require('../services/notesService');
const { verifyToken, checkAdmin } = require('../middleware/middlewares');

const router = express.Router();
const notesService = new NotesService();
const notesController = new NotesController(notesService);

router.post('/notes', verifyToken, notesController.createNote.bind(notesController));
router.put('/notes/:id', verifyToken, notesController.editNote.bind(notesController));
router.delete('/notes/:id', verifyToken, checkAdmin, notesController.deleteNote.bind(notesController));
router.get('/notes', verifyToken, notesController.getNotes.bind(notesController));

module.exports = router;