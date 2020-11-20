const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path')
require('./db/mongoose')

const admin = require('./routes/admin')
const sareeadmin = require('./routes/SareeAdmin')
const verifyToken = require('./middleware/auth')
dotenv.config()
var app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({strict: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/admin', admin)
app.use('/sareeadmin',verifyToken,sareeadmin)

const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
  });