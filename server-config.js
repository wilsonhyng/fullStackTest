var express = require('express');
var Movie = require('./App/Models/movie');
var mongooseConnection = require('./app/config.js');

var path = require('path');

var app = express();

app.use(express.static(__dirname + '/client/'));

// app.use(express.static(path.join(__dirname, 'client')));

// app.use("/styles", express.static(__dirname + '/client'));

// app.use('/static', express.static(__dirname + '/client'));


// WORKS
// app.get('/client/styles/style.css', (req, res) => {
//   res.sendFile(__dirname + '/client/styles/styles.css')
// })

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/client/index.html');
// })

app.get('/addMovie', (req, res) => {
  var movie = new Movie({name: 'Saving Private Katharine'});
  movie.save((err, movie) => {
    if (err) {
      return console.error(err);
    }
    console.log('MOVIE SAVED', movie);
  })
})

// app.get('/getMovies ', (req, res) => {

// })

module.exports = app;