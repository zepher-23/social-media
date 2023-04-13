const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/social', {
      useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.error('Error connecting to database', err);
})

module.exports = mongoose.connection;