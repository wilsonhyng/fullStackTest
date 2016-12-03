var express = require('express');
var Movie = require('./config.js');



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



// var numTestDocs = 100; // or however many you want
// for(var i = 0; i < numTestDocs; i++) {
//    var someLength = 12; // Alternatively, you could use a random number generator
//    var randomWord = createRandomWord(someLength);
//    var item = new Item ({
//       title : randomWord ,
//       desc  : randomWord + ' is just a test'
//    });
//    item.save(function(err, doc) {
//       // do error handling if you want to
//       console.log('Test Record Saved with id: ' + doc._id);
//    });
// }