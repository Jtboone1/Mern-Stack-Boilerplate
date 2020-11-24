const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);



io.on('connection', (socket) => {
    console.log("Connected!");

    socket.on('disconnect', () => {
        console.log("Disconnected!");
    }) 

    socket.on('joinRoom', (room) => {
        console.log(room)
        socket.join(room);
        console.log(socket.rooms)
     });

    socket.on('testMessage', (room) => {
       io.in(room).emit('final');
       console.log(socket.rooms);
    })

    

})



app.get('/', (req, res) => {
    res.send('<h1>Hello from Server</h1>')
})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
