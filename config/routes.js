var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var albumsController = require('../controllers/albumsController');

router.route('/albums')
  .get(albumsController.getAll); //route to all albums (homepage)
//   .post(albumsController.createAlbum); //route to post new album
// router.route('/albums/new')
//   .get(albumsController.newAlbum); //route to form for new album

module.exports = router;