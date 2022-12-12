const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');

dotenv.config();

const port = 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URL);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

//ROUTES
app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`Server is running: ${port}`);
})