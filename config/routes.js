var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var albumsController = require('../controllers/albumsController');

router.route('/albums')
  .get(albumsController.getAll) //route to all albums (homepage)
  .post(albumsController.createAlbum); //route to post new album
router.route('/albums/new')
  .get(albumsController.newAlbum); //route to form for new album
router.route('/albums/:id')
  .get(albumsController.showAlbum) //route to show one album
  .patch(albumsController.updateAlbum) //route to post updated album
  .delete(albumsController.removeAlbum); //route to delete an album
router.route('/albums/:id/edit')
  .get(albumsController.editAlbum); //route to form for editing album
  

module.exports = router;