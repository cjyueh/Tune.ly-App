var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var hbs = require('hbs');

// for database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/albums-app');
process.on('exit', function() { mongoose.disconnect(); });

var routes = require('./config/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// set app to use hbs
app.set("view engine", "hbs");
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

var port = 3000;

// CONTROLLERS
var albumsController = require("./controllers/albumsController");

// ROUTES
app.use(routes);

// Start server
app.listen(port, function() {
  console.log("app is running on port:", port);
});