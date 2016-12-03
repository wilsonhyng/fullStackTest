var express = require('express');
var Movie = require('./App/Models/movie');
var mongooseConnection = require('./app/config.js');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})

app.get('/addMovie', (req, res) => {
  var movie = new Movie({name: 'Saving Private Katharine'});
  movie.save((err, movie) => {
    if (err) {
      return console.error(err);
    }
    console.log('MOVIE SAVED', movie);
  })
})

module.exports = app;