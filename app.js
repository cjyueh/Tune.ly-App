var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var hbs = require('hbs');
var passport = require('passport');
var path = require('path');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// for database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/albums-app');
process.on('exit', function() { mongoose.disconnect(); });

var routes = require('./config/routes');

// Middleware
app.use( cookieParser() );
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// set app to use hbs
app.set("view engine", "hbs");
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

// Setting up the Passport Strategies
require("./config/passport")(passport);

var port = 3000;

// CONTROLLERS
var albumsController = require("./controllers/albumsController");

// ROUTES
app.use(routes);

// // for users
// // GET root route
// app.get('/', function(req, res){
//   res.render('layout', {user: req.user});
// });

// GET authentication from fb (request to fb); if user authorizes app to use fb acct to login, fb will send back the request to the url passed as a param with the field callbackURL
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));

// GET callback from fb
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/albums',
    failureRedirect: '/albums'
  })
);

// GET logout for user
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/albums");
});

// Start server
app.listen(port, function() {
  console.log("app is running on port:", port);
});