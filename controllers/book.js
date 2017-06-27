var express = require('express');
var app = express();
var bookRouter = express.Router(server.js);


var BookQuery = require('../db/bookQuery.js');
var Query = new BookQuery();

filmRouter.get('/', function(req, res){
  query.all(function(books){
    res.json(books)
  })
})
