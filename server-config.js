var express = require('express');
var bodyParser = require('body-parser');

var request = require('request');

var Promise = require('bluebird');
var Movie = require('./App/Models/movie');
var mongooseConnection = require('./app/config.js');

var path = require('path');
var app = express();
var router = express.Router();


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

// app.get('https://api.hypem.com/v2/users/wily6/favorites', function(req, res) {
//   req.page = 2;
//   req.count = 10;

 
//   console.log(res);

// });

app.get('/getApi', function (req, res) {  

  request.get('https://api.hypem.com/v2/users/wily6/favorites?page=1&count=10&key=swagger', function(error, response, body) {
    console.log(JSON.parse(body));
    res.send(JSON.parse(body));

  });
  // .on('response', function(req, res) {
  //   console.log(JSON.stringify(res));



});


module.exports = app;