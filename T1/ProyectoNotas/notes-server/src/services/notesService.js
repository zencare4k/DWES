class NotesService {
  constructor() {
    this.notes = [];
  }

  async create(noteData) {
    const newNote = { id: this.notes.length + 1, ...noteData };
    this.notes.push(newNote);
    return newNote;
  }

  async edit(id, updatedData) {
    const noteIndex = this.notes.findIndex(note => note.id === parseInt(id));
    if (noteIndex === -1) {
      return null;
    }
    this.notes[noteIndex] = { id: parseInt(id), ...updatedData };
    return this.notes[noteIndex];
  }

  async delete(id) {
    const noteIndex = this.notes.findIndex(note => note.id === parseInt(id));
    if (noteIndex === -1) {
      return null;
    }
    const deletedNote = this.notes.splice(noteIndex, 1);
    return deletedNote[0];
  }

  async getAll() {
    return this.notes;
  }
}

module.exports = NotesService;