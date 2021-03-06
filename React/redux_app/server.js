"use strict"
const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.senFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(3000, function () {
  console.log('> listening at http://localhost:3000')
});
