// create an express app

const express = require('express');
const path = require('path');

const app = express();

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// define the first route
app.get('/', (req, res) => {
  // res.send({hi: 'there'});
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// start the server listening for requests
app.listen(process.env.PORT || 3000);
