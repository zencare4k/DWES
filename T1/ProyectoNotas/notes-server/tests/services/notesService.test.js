const NotesService = require('../../src/services/notesService');
const Note = require('../../src/models/note');

jest.mock('../../src/models/note');

describe('NotesService', () => {
  let notesService;

  beforeEach(() => {
    notesService = new NotesService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createNote', () => {
    it('should create a new note', async () => {
      const noteData = { title: 'Test Note', content: 'This is a test note.' };
      Note.mockImplementation(() => noteData);
      const savedNote = await notesService.createNote(noteData);
      expect(Note).toHaveBeenCalledWith(noteData);
      expect(savedNote).toEqual(noteData);
    });
  });

  describe('editNote', () => {
    it('should edit an existing note', async () => {
      const noteData = { title: 'Test Note', content: 'This is a test note.' };
      const updatedData = { title: 'Updated Note', content: 'This is an updated note.' };
      Note.findById.mockResolvedValue(noteData);
      Note.prototype.save = jest.fn().mockResolvedValue(updatedData);

      const result = await notesService.editNote('1', updatedData);
      expect(Note.findById).toHaveBeenCalledWith('1');
      expect(Note.prototype.save).toHaveBeenCalled();
      expect(result).toEqual(updatedData);
    });
  });

  describe('deleteNote', () => {
    it('should delete a note', async () => {
      Note.findById.mockResolvedValue({ remove: jest.fn() });
      await notesService.deleteNote('1');
      expect(Note.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('getNotes', () => {
    it('should return all notes', async () => {
      const notesArray = [{ title: 'Note 1' }, { title: 'Note 2' }];
      Note.find.mockResolvedValue(notesArray);
      const notes = await notesService.getNotes();
      expect(Note.find).toHaveBeenCalled();
      expect(notes).toEqual(notesArray);
    });
  });
});