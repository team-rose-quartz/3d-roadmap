// create an express app

const express = require('express');
const path = require('path');

const app = express();

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// define the main route for the App
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// start the server listening for requests
// Heroku requires process.env.PORT for the production server
// Runs the server at localhost:3000 for development
app.listen(process.env.PORT || 3000);
