//COMMIT THIS FILE!!

//branch out between DEV or PROD
if (process.env.NODE_ENV === 'production'){
  //return production keys, which are defined in Heroku
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
  }
} else {
  //return secret dev keys
  
  module.exports = require('./dev');
}