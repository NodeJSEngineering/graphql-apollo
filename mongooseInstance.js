// mongooseInstance.js
const mongoose = require('mongoose');

// Replace with your MongoDB URI or use the default localhost for testing
const mongoURI = 'mongodb://localhost:27017/graphql_example'; // You can also use MongoDB Atlas URI here

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = mongoose;
