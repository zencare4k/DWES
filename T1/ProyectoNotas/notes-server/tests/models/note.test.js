const Note = require('../../src/models/note');

describe('Note Model', () => {
  it('should create a note with valid title and content', () => {
    const noteData = {
      title: 'Test Note',
      content: 'This is a test note content.'
    };
    const note = new Note(noteData);
    expect(note.title).toBe(noteData.title);
    expect(note.content).toBe(noteData.content);
  });

  it('should throw an error if title is missing', () => {
    const noteData = {
      content: 'This is a test note content.'
    };
    expect(() => new Note(noteData)).toThrow('Title is required');
  });

  it('should throw an error if content is missing', () => {
    const noteData = {
      title: 'Test Note'
    };
    expect(() => new Note(noteData)).toThrow('Content is required');
  });

  it('should throw an error if title is too long', () => {
    const noteData = {
      title: 'a'.repeat(256),
      content: 'This is a test note content.'
    };
    expect(() => new Note(noteData)).toThrow('Title must be less than 255 characters');
  });

  it('should throw an error if content is too long', () => {
    const noteData = {
      title: 'Test Note',
      content: 'a'.repeat(1001)
    };
    expect(() => new Note(noteData)).toThrow('Content must be less than 1000 characters');
  });
});