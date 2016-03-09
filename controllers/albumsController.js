var Album = require('../models/Album');

// GET all the albums
function getAll(req, res) {
  Album.find(function(err, albums) {
    if (err) {
      console.log(err);
    }
    // res.send(albums); //show seed data on page
    res.render('../views/albums/index', {albums: albums.reverse(), user: req.user});
  });
}

// GET albums matching search input value
function searchAlbum(req, res) {
  console.log(req.query);
  Album.find({album_name: { "$regex": req.query.searchQuery, "$options": "i" }}, function(err, albums) {
    if (err) {
      console.log(err);
    }
    console.log({albums: albums});
    res.json({albums: albums, user: req.user});
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
  res.render('../views/albums/new', {user: req.user});
}

// GET one album
function showAlbum(req, res) {
  var id = req.params.id;
  Album.findById({_id: id}, function (err, album) {
    if (err) {
      console.log(err);
    }
    // res.send(album); 
    res.render('../views/albums/show', {album: album, user: req.user});
  });
}

// GET form to edit an album
function editAlbum(req, res) {
  var id = req.params.id;
  Album.findById({_id: id}, function (err, album) {
    if (err) {
      console.log(err);
    }
    // res.send("this is the edit page"); 
    res.render('../views/albums/edit', {album: album, user: req.user});
  });
}

// POST updates to album
function updateAlbum(req, res) {
  var id = req.params.id;
  Album.findById({_id: id}, function (err, album) {
    if (err) {
      console.log(err);
    }
    if (req.body.album_name) {
      album.album_name = req.body.album_name;
    }
    if (req.body.artist_name) {
      album.artist_name = req.body.artist_name;
    }
    if (req.body.release_date) {
      album.release_date = req.body.release_date;
    }
    if (req.body.genre) {
      album.genre = req.body.genre;
    }
    if (req.body.image_url) {
      album.image_url = req.body.image_url;
    }
    album.save(function(err) {
      if (err) {
        console.log(err);
      }
      // res.send("It's updated!");
      res.render('../views/albums/show', {album: album, user: req.user});
    });
  });
}

// POST to delete an album
function removeAlbum(req, res) {
  var id = req.params.id;
  Album.remove({_id: id}, function (err) {
    if (err) {
      console.log(err);
    }
    // res.send("we deleted an album!"); 
    res.redirect('/albums');
  });
}

module.exports = {
  getAll: getAll,
  newAlbum: newAlbum,
  searchAlbum: searchAlbum,
  createAlbum: createAlbum,
  showAlbum: showAlbum,
  editAlbum: editAlbum,
  updateAlbum: updateAlbum,
  removeAlbum: removeAlbum
};