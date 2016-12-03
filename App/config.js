var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviedatabase');

var movieschema = new mongoose.Schema({ name: 'string'});

var Movie = mongoose.model('Movie', movieschema);

// var SPR = new Movie({ name: 'Saving Private Wilson' });

// SPR.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// })

module.exports = Movie;

// make a file that makes dummy data for the server when executed with node