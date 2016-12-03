var express = require('express');
var db = require('./app/config.js');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})

app.get('/addMovie', (req, res) => {
  var movie = new db({name: 'Saving Private Katharine'});
  movie.save((err) => {
    if (err) {
      return console.error(err);
    }
    console.log('MOVIE SAVED');
  })
})

app.listen(3000);