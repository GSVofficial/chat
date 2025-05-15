const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);
const PORT = 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (data) => {
    io.emit('chat message', data); // Emit entire object: { user, text }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://192.168.1.5:${PORT}`);
});
