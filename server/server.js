// create an express app

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require('../keys/keys');

require('./models/model');
require('./controllers/passport');

mongoose.connect(keys.mongoURI);

const app = express();

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days (in milliseconds)
    keys: [keys.cookieKey], // special cookie key
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// routes for Google signin

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  },
);

app.get('/logout', async (req, res) => {
  if (req.user && req.user.signedIn) {
    req.user.signedIn = false;
    await req.user.save();
    req.logout(); // passport kills the cookie
  }
  res.redirect('/');
});

app.get('/user', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send({ notSignedIn: 'notSignedIn' });
  }
});

// define the main route for the App
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// start the server listening for requests
// Heroku requires process.env.PORT for the production server
// Runs the server at localhost:3000 for development
app.listen(process.env.PORT || 3000);
