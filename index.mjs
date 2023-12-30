import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 5000 });
console.log('server')
server.on('connection', socket => {
    socket.on('error', console.error);
    socket.send('Socket connected!');
    console.log('Socket connected!')
})