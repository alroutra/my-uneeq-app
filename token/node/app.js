require('dotenv').config();

const express = require('express');
const app = express();

const token = require('./routes/token');
const ping = require('./routes/ping');

// Add the URL routes for ping and token paths
app.use('/ping', ping);
app.use('/token', token);

module.exports = app;
