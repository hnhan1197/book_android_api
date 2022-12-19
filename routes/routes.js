const express = require('express');
const authRoute = require('./auth');
const userRoute = require('./user');
const bookRoute = require('./book');

const app = express();

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/book', bookRoute);

module.exports = app;