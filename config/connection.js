const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/socialDB', 
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = Mongoose.connection;