const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the main user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;