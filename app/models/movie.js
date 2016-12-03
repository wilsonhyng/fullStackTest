var mongoose = require('mongoose');
var Promise = require('bluebird');

var movieSchema = mongoose.Schema({ name: 'string'});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// // make a file that makes dummy data for the server when executed with node