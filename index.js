const mongoose = require('mongoose');
const express = require('express');

const IndentorSchema = require('./DataBase/models/schemas.js');

let conn = mongoose.connect('mongodb://localhost:27017/project');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
