const request = require('supertest');
const express = require('express');
const errorHandler = require('../../src/utils/errorHandler');

const app = express();
app.use(express.json());
app.use(errorHandler);

describe('Error Handler Middleware', () => {
  it('should return a 500 status code for unhandled errors', async () => {
    app.get('/error', (req, res) => {
      throw new Error('Test error');
    });

    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });

  it('should return a custom error message for known errors', async () => {
    app.get('/bad-request', (req, res) => {
      const error = new Error('Bad Request');
      error.status = 400;
      throw error;
    });

    const response = await request(app).get('/bad-request');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Bad Request' });
  });
});