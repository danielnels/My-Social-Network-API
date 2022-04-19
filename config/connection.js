const Mongoose = require('mongoose');

Mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB', 
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = Mongoose.connection;