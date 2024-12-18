const fs = require('fs');
const path = require('path');

class NotesController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async createNote(req, res) {
    try {
      const noteData = req.body;
      const newNote = await this.notesService.create(noteData);
      
      const noteId = newNote.id;
      const notePath = path.join(__dirname, '../notes', `${noteId}.note`);
      fs.writeFile(notePath, JSON.stringify(newNote), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating note file', error: err.message });
        }
      });

      res.status(201).json(newNote);
    } catch (error) {
      res.status(500).json({ message: 'Error creating note', error: error.message });
    }
  }

  async editNote(req, res) {
    try {
      const { id } = req.params;
      const noteData = req.body;
      const updatedNote = await this.notesService.edit(id, noteData);
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }

      const notePath = path.join(__dirname, '../notes', `${id}.note`);
      fs.writeFile(notePath, JSON.stringify(updatedNote), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error updating note file', error: err.message });
        }
      });

      res.status(200).json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Error editing note', error: error.message });
    }
  }

  async deleteNote(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.notesService.delete(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Note not found' });
      }

      const notePath = path.join(__dirname, '../notes', `${id}.note`);
      fs.unlink(notePath, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error deleting note file', error: err.message });
        }
      });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
  }

  async getNotes(req, res) {
    try {
      const notes = await this.notesService.getAll();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving notes', error: error.message });
    }
  }
}

module.exports = NotesController;