var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express().Router;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos2');

app.use(bodyParser());

var port = process.env.PORT || 3000;

app.listen(port, function(req, res){
  console.log('listening on port: ' + port)
});