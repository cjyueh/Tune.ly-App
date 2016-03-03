var Album = require('../models/Album');

// GET all the albums
function getAll(req, res) {
  Album.find(function(err, albums) {
    if (err) {
      console.log(err);
    }
    res.json({message: "It works!"});
    // res.render('layout', {albums: albums});
  });
}

// POST (create) a new album
// function createAlbum(req, res) {
//   var album = new Album(req.body);
//   album.save(function(err, album) {
//     if (err) {
//       console.log(err);
//     }
//     res.redirect('layout');
//   });
// }

// GET form to make new album
// function newAlbum(req, res) {
//   res.render('new');
// }
module.exports = {
  getAll: getAll
};