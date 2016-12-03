var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviedatabase');


var mongooseConnection = mongoose;

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
  console.log('Mongodb connection open');
});


module.exports = mongooseConnection;



// creates schema / models for mongodb via mongoose