var Album = require('../models/Album');

// GET all the albums
function getAll(req, res) {
  Album.find(function(err, albums) {
    if (err) {
      console.log(err);
    }
    // res.send(albums); //show seed data on page
    res.render('../views/albums/index', {albums: albums});
  });
}

// POST (create) a new album
function createAlbum(req, res) {
  var album = new Album(req.body);
  album.save(function(err, album) {
    if (err) {
      console.log(err);
    }
    res.redirect('/albums');
  });
}

// GET form to make new album
function newAlbum(req, res) {
  res.render('../views/albums/new');
}

// GET form to edit an album
function showAlbum(req, res) {
  var id = req.params.id;
  Album.findById({_id: id}, function (err, album) {
    if (err) {
      console.log(err);
    }
    // res.send(album); 
    res.render('../views/albums/show', {album: album});
  });
}

module.exports = {
  getAll: getAll,
  newAlbum: newAlbum,
  createAlbum: createAlbum,
  showAlbum: showAlbum
};