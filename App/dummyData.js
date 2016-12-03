var express = require('express');
var Movie = require('./models/movie');
var mongooseConnection = require('./config.js');


var testMovies = [
  {name: 'Interstellar'},
  {name: 'Arrival'},
  {name: 'Contact'},
  {name: 'Sunshine'}
]


for (var i = 0; i < testMovies.length; i++) {
  var testMovie = new Movie(testMovies[i])
  testMovie.save((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Test Movie Saved with id: ' + doc._id);
    }
  })
}




// make a file that makes dummy data for the server when executed with node