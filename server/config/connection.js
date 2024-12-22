const mongoose = require('mongoose');

// Set strictQuery to true
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/virtual-dancefloor');

module.exports = mongoose.connection;
