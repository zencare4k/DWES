# README.md

# Notes Server

This is a simple Notes Server application built with Node.js and Express. It allows users to create, edit, delete, and retrieve notes. The application follows an MVC architecture and includes proper error handling and logging.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd notes-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will listen on the port specified in the `.env` file.

## API Endpoints

- `POST /notes` - Create a new note
- `GET /notes` - Retrieve all notes
- `PUT /notes/:id` - Edit an existing note
- `DELETE /notes/:id` - Delete a note

## Testing

To run the tests, use the following command:
```
npm test
```

Ensure that you have a test database set up if your tests require database access.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:
```
PORT=3000
```

## License

This project is licensed under the ISC License.