const request = require('supertest');
const app = require('../../src/app');
const NotesController = require('../../src/controllers/notesController');

describe('NotesController', () => {
  let notesController;

  beforeAll(() => {
    notesController = new NotesController();
  });

  describe('POST /notes', () => {
    it('should create a new note', async () => {
      const response = await request(app)
        .post('/notes')
        .send({ title: 'Test Note', content: 'This is a test note.' });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe('Test Note');
    });
  });

  describe('PUT /notes/:id', () => {
    it('should edit an existing note', async () => {
      const noteId = '1'; // Replace with a valid note ID
      const response = await request(app)
        .put(`/notes/${noteId}`)
        .send({ title: 'Updated Note', content: 'This is an updated test note.' });
      expect(response.status).toBe(200);
      expect(response.body.title).toBe('Updated Note');
    });
  });

  describe('DELETE /notes/:id', () => {
    it('should delete a note', async () => {
      const noteId = '1'; // Replace with a valid note ID
      const response = await request(app).delete(`/notes/${noteId}`);
      expect(response.status).toBe(204);
    });
  });

  describe('GET /notes', () => {
    it('should retrieve all notes', async () => {
      const response = await request(app).get('/notes');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});