const express = require('express');

const app = express();

const body_parser = require('body-parser');

app.use(body_parser.json());

const UserRouter = require('./router.js');

app.use('/', UserRouter);

module.exports = app;
