class NotesController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async getNotes(req, res) {
    try {
      const notes = await this.notesService.getAll();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving notes', error: error.message });
    }
  }

  async createNote(req, res) {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Título y contenido son requeridos' });
    }
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (trimmedTitle === '' || trimmedContent === '') {
      return res.status(400).json({ message: 'Título y contenido no pueden estar vacíos' });
    }
    try {
      const newNote = await this.notesService.create({ title: trimmedTitle, content: trimmedContent });
      res.status(201).json(newNote);
    } catch (error) {
      res.status(500).json({ message: 'Error creating note', error: error.message });
    }
  }

  async editNote(req, res) {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      return res.status(400).send('Contenido es requerido');
    }

    try {
      const updatedNote = await this.notesService.edit(id, { content });
      if (!updatedNote) {
        return res.status(404).json({ message: 'Nota no encontrada' });
      }
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Error editing note', error: error.message });
    }
  }

  async deleteNote(req, res) {
    const { id } = req.params;
    try {
      const deletedNote = await this.notesService.delete(id);
      if (!deletedNote) {
        return res.status(404).json({ message: 'Nota no encontrada' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting note', error: error.message });
    }
  }

  async getAllNotes(req, res) {
    const { 
      sortBy = 'date', 
      filterTitle, 
      filterContent, 
      filterCategory, 
      startDate, 
      endDate,
      page = 1, 
      limit = 10 
    } = req.query;

    try {
      const notes = await this.notesService.getAll();
      
      let filteredNotes = notes;

      if (filterTitle) {
        filteredNotes = filteredNotes.filter(note => note.title.includes(filterTitle));
      }
      if (filterContent) {
        filteredNotes = filteredNotes.filter(note => note.content.includes(filterContent));
      }
      if (filterCategory) {
        filteredNotes = filteredNotes.filter(note => note.category === filterCategory);
      }
      if (startDate && endDate) {
        filteredNotes = filteredNotes.filter(note =>
          new Date(note.date) >= new Date(startDate) &&
          new Date(note.date) <= new Date(endDate)
        );
      }

      if (sortBy === 'title') {
        filteredNotes.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === 'size') {
        filteredNotes.sort((a, b) => a.size - b.size);
      } else {
        filteredNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      const totalItems = filteredNotes.length;
      const startIndex = (page - 1) * limit;
      const paginatedNotes = filteredNotes.slice(startIndex, startIndex + Number(limit));
      const totalPages = Math.ceil(totalItems / limit);

      res.json({
        totalItems,
        totalPages,
        currentPage: Number(page),
        notes: paginatedNotes
      });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving notes', error: error.message });
    }
  }

  async exportNotes(req, res) {
    const { filterTitle, filterCategory, startDate, endDate } = req.query;

    try {
      const notes = await this.notesService.getAll();

      let filteredNotes = notes;
      if (filterTitle) {
        filteredNotes = filteredNotes.filter(note => note.title.includes(filterTitle));
      }
      if (filterCategory) {
        filteredNotes = filteredNotes.filter(note => note.category === filterCategory);
      }
      if (startDate && endDate) {
        filteredNotes = filteredNotes.filter(note =>
          new Date(note.date) >= new Date(startDate) &&
          new Date(note.date) <= new Date(endDate)
        );
      }

      if (filteredNotes.length === 0) {
        return res.status(404).send('No hay notas que coincidan con los filtros.');
      }

      const exportContent = JSON.stringify(filteredNotes, null, 2);
      const fileName = `exported_notes_${Date.now()}.notes`;

      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.setHeader('Content-Type', 'application/json');
      res.send(exportContent);
    } catch (error) {
      res.status(500).json({ message: 'Error exporting notes', error: error.message });
    }
  }
}

module.exports = NotesController;