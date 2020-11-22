const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req,res) => {
    res.send('<h1>Hello from Server</h1>')
})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
