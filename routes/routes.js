const express = require('express');
const authRoute = require('./auth');
const userRoute = require('./user');
const bookRoute = require('./book');
const receiptRoute = require('./receipt');

const app = express();

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/book', bookRoute);
app.use('/receipt', receiptRoute);

module.exports = app;