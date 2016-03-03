var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  album_name: String,
  artist_name: String,
  release_date: Date,
  genre: String,
  image_url: String
});

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;