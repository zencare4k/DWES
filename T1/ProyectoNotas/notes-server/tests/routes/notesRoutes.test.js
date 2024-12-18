const request = require('supertest');
const app = require('../../src/app');
const Note = require('../../src/models/note');

describe('Notes Routes', () => {
  beforeEach(async () => {
    await Note.deleteMany({});
  });

  it('should create a new note', async () => {
    const response = await request(app)
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Test Note');
    expect(response.body).toHaveProperty('content', 'This is a test note.');
  });

  it('should get all notes', async () => {
    await Note.create({ title: 'Test Note 1', content: 'Content 1' });
    await Note.create({ title: 'Test Note 2', content: 'Content 2' });

    const response = await request(app).get('/notes');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('should edit an existing note', async () => {
    const note = await Note.create({ title: 'Note to Edit', content: 'Old Content' });

    const response = await request(app)
      .put(`/notes/${note._id}`)
      .send({ title: 'Updated Note', content: 'Updated Content' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Updated Note');
  });

  it('should delete a note', async () => {
    const note = await Note.create({ title: 'Note to Delete', content: 'Content' });

    const response = await request(app).delete(`/notes/${note._id}`);

    expect(response.status).toBe(204);
  });

  it('should return 404 for a non-existing note', async () => {
    const response = await request(app).get('/notes/123456789012345678901234');

    expect(response.status).toBe(404);
  });
});