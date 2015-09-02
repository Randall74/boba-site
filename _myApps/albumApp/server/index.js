var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('bodyParser');
var methodOverride = require('methodOverride');
var _ = require('lodash');

// Create application
var app = express();

// Add Middleware necessary for REST APIs
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Connect to MongoDB
mongoose.connect('mongodb:process.env.IP/albumApp');
mongoose.connection.once('open', function() {
   
   console.log('Listening on port 15454...') ;
   app.listen(15454);
});