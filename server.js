'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validNumber = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    console.log('BlueBerry')
    res.status(200).send('Bravo But Where is the Number')
})

app.get('/square', validNumber(), (req, res) => {
  const number = req.number;
  res.status(200).json({ number: number });
});

app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
      console.log(`Start Server At Port: ${port}`);
    });
  }
  
  module.exports = {
    app: app,
    start: start
  };