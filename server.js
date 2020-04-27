const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./users/usersRouter');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('<h2>Node-Server-Testing-Challenge</h2>');
});

module.exports = server;