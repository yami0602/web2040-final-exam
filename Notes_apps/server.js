
var port = 6002;
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongo = require('./config')();
const mongoose = require('mongoose');

app.set('view engine', 'ejs')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));

require("./apps/routes")

app.listen(port);

console.log("Server listening on port " + port);



  