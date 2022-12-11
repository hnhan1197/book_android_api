const express = require('express');
const authRoute = require('./auth');
const userRoute = require('./user');

const app = express();

app.use('/auth', authRoute);
app.use('/user', userRoute);

module.exports = app;