const axios = require('axios');

class NotesService {
  constructor(apiUrl) {
    this.apiUrl = 'https://localhost:3000';
  }

  async create(noteData) {
    try {
      const response = await axios.post(`${this.apiUrl}/notes`, noteData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating note: ' + error.message);
    }
  }

  async edit(id, updatedData) {
    try {
      const response = await axios.put(`${this.apiUrl}/notes/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw new Error('Error editing note: ' + error.message);
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${this.apiUrl}/notes/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting note: ' + error.message);
    }
  }

  async getAll() {
    try {
      const response = await axios.get(`${this.apiUrl}/notes`);
      return response.data;
    } catch (error) {
      throw new Error('Error retrieving notes: ' + error.message);
    }
  }

  async getById(id) {
    try {
      const response = await axios.get(`${this.apiUrl}/notes/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error retrieving note: ' + error.message);
    }
  }
}

module.exports = NotesService;