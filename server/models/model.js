const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    googleID: String,
    facebookID: String,
    active: Boolean,
    signedIn: Boolean,
    name: String,
    email: String,
  }, 
  { timestamps: true }
);

mongoose.model('users', userSchema);