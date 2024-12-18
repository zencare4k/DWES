const fs = require('fs');
const path = require('path');

class NotesController {
  constructor(notesService) {
    this.notesService = notesService;
  }

  async getNotes(req, res) {
    res.json({ message: 'Listado de notas', user: req.user });
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
    // Aquí podrías asociar la nota con req.user.id
    res.status(201).json({ message: 'Nota creada', title: trimmedTitle, content: trimmedContent, user: req.user });
  }

  async editNote(req, res) {
    const { id } = req.params;
    const { content } = req.body;

    console.log('Body recibido:', req.body); // Depuración: imprime el contenido recibido

    if (!content) {
      return res.status(400).send('Contenido es requerido');
    }

    // Simulación de actualización (puedes cambiar esto según tu lógica)
    res.json({ message: `Nota ${id} actualizada`, content });
  }

  async deleteNote(req, res) {
    const { id } = req.params;
    res.json({ message: `Nota ${id} eliminada` });
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

    let notes = [
      { title: "Nota 1", content: "Contenido de prueba", category: "Trabajo", date: "2024-06-01", size: 100 },
      { title: "Nota 2", content: "Contenido importante", category: "Personal", date: "2024-06-10", size: 200 },
      { title: "Nota 3", content: "Contenido aleatorio", category: "Trabajo", date: "2024-06-05", size: 150 },
    ];

    if (filterTitle) {
      notes = notes.filter(note => note.title.includes(filterTitle));
    }
    if (filterContent) {
      notes = notes.filter(note => note.content.includes(filterContent));
    }
    if (filterCategory) {
      notes = notes.filter(note => note.category === filterCategory);
    }
    if (startDate && endDate) {
      notes = notes.filter(note =>
        new Date(note.date) >= new Date(startDate) &&
        new Date(note.date) <= new Date(endDate)
      );
    }

    if (sortBy === 'title') {
      notes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'size') {
      notes.sort((a, b) => a.size - b.size);
    } else {
      notes.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const totalItems = notes.length;
    const startIndex = (page - 1) * limit;
    const paginatedNotes = notes.slice(startIndex, startIndex + Number(limit));
    const totalPages = Math.ceil(totalItems / limit);

    res.json({
      totalItems,
      totalPages,
      currentPage: Number(page),
      notes: paginatedNotes
    });
  }

  async exportNotes(req, res) {
    const { filterTitle, filterCategory, startDate, endDate } = req.query;

    const notes = [
      { title: "Nota 1", content: "Contenido de prueba", category: "Trabajo", date: "2024-06-01" },
      { title: "Nota 2", content: "Contenido importante", category: "Personal", date: "2024-06-10" },
      { title: "Nota 3", content: "Contenido aleatorio", category: "Trabajo", date: "2024-06-05" },
    ];

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
  }
}

module.exports = NotesController;