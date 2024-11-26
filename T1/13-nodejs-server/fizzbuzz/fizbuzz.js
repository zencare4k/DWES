const http = require('http');
const url = require('url');

const fizzBuzz = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result.join(', ');
};

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.startsWith('/fizzbuzz')) {
    const num = parseInt(queryObject.num, 10);
    if (isNaN(num)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Parámetro num inválido');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(fizzBuzz(num));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
