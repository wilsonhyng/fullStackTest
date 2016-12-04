var express = require('express');
// var bodyparser = require('body-parser');
var Promise = require('bluebird');
var Movie = require('./App/Models/movie');
var mongooseConnection = require('./app/config.js');

var path = require('path');
var app = express();
// var router = express.Router();

// this works as well
// app.use(express.static(__dirname + '/client/'));

app.use(express.static(path.join(__dirname, 'client')));
// app.use(router);

app.get('/addMovie', (req, res) => {
  var movie = new Movie({name: 'Saving Private Katharine'});
  movie.save((err, movie) => {
    if (err) {
      return console.error(err);
    }
    console.log('MOVIE SAVED', movie);
    res.status(201).redirect('/');
  });
});

app.get('/getMovies', (req, res) => {

  Movie.find({}, (err, movies) => {
    if (err) {
      return console.error(err);
    }
    movies.forEach((movie) => {
      console.log(movie);
    });
  });
  res.status(200).redirect('/');
});

module.exports = app;