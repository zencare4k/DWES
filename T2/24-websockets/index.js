const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (data) => {
    console.log('message: ' + data.message + ' from ' + data.nickname);
    io.emit('chat message', data);
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('listening on *:3000');
});