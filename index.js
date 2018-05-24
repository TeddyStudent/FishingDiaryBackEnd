const Joi = require('joi');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const morgan = require('morgan');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
app.use(cors());
app.use(express.json());

// Lets to production only stuff inside this if
if(isProduction){
    // production staff here

} else {
    // development only staff here
    // activate morgan logger
    app.use(morgan('combined'));

}


//direct routing to ./routes/index.js
app.use(require('./routes'))


//use the environment variable PORT if available, otherwise assign port to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
