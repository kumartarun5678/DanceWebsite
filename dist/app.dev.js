"use strict";

var express = require("express");

var path = require("path");

var app = express();
var port = 8000; // EXPRESS SPECIFIC STUFF

app.use('/static', express["static"]('static')); // For serving static files

app.use(express.urlencoded()); // PUG SPECIFIC STUFF

app.set('view engine', 'pug'); // Set the template engine as pug

app.set('views', path.join(__dirname, 'views')); // Set the views directory
// ENDPOINTS

app.get('/', function (req, res) {
  var params = {};
  res.status(200).render('index.pug', params);
});
app.get('/', function (req, res) {
  var params = {};
  res.status(200).render('home.pug', params);
});
app.get('/contact', function (req, res) {
  var params = {};
  res.status(200).render('contact.pug', params);
}); // START THE SERVER

app.listen(port, function () {
  console.log("The application started successfully on port ".concat(port));
});
//# sourceMappingURL=app.dev.js.map
