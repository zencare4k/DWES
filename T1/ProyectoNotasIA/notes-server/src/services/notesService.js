class NotesService {
  constructor() {
    this.notes = [];
  }

  createNote(title, content) {
    const newNote = { id: this.notes.length + 1, title, content };
    this.notes.push(newNote);
    return newNote;
  }

  editNote(id, updatedTitle, updatedContent) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    this.notes[noteIndex] = { id, title: updatedTitle, content: updatedContent };
    return this.notes[noteIndex];
  }

  deleteNote(id) {
    const noteIndex = this.notes.findIndex(note => note.id === id);
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }
    const deletedNote = this.notes.splice(noteIndex, 1);
    return deletedNote[0];
  }

  getNotes() {
    return this.notes;
  }

  getNoteById(id) {
    const note = this.notes.find(note => note.id === id);
    if (!note) {
      throw new Error('Note not found');
    }
    return note;
  }
}

module.exports = NotesService;