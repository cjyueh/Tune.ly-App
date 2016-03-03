var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/albums-app');
var Candy = require('../models/Album');
Album.remove({}, function(err) {
  if (err) {
    console.log(err);
  }
});

var albums = [
  {album_name: "The White Album",
  artist_name: "The Beatles",
  release_date: "November 22, 1968",
  genre: "Rock",
  image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/The_White_Album.svg/2000px-The_White_Album.svg.png"},
  {album_name: "Sgt. Pepper's Lonely Hearts Club Band",
  artist_name: "The Beatles",
  release_date: "June 1, 1967",
  genre: "Rock",
  image_url: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper's_Lonely_Hearts_Club_Band.jpg"}
];

Album.create(albums, function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log("created");
    mongoose.connection.close();
  }
});