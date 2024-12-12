// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server, { cors: { origin: '*' } });

// // app.use((req,res,next)=>{
// //   res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
// //   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
// //   res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
// //   next(); 
// // })


// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'index.html'));
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });


const path = require('path');
const { createServer } = require('http');

const express = require('express');
const { getIO, initIO } = require('./socket');

const app = express();

app.use('/', express.static(path.join(__dirname, 'static')));

const httpServer = createServer(app);

let port = process.env.PORT || 3000;

initIO(httpServer);

httpServer.listen(port)
console.log("Server started on ", port);

getIO();