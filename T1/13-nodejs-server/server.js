const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/page') {
    fs.readFile(path.join(__dirname, 'page.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error en el servidor');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/error') {
    fs.readFile(path.join(__dirname, 'error.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error en el servidor');
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }

  if (req.url.startsWith('/hello')) {
    const name = queryObject.name || 'World';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello ${name}!`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});



