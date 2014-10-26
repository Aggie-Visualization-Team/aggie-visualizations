var app = require('./../app');
var express = require('express');
var router = express.Router();

var sources = require('./sources');
var reports = require('./reports');
var incidents = require('./incidents');
var MongoClient = require('mongodb').MongoClient;

router.use('/sources',sources);
router.use('/reports',reports);
router.use('/incidents',incidents);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Aggie Visualization Test' });
});
 
router.get('/map', function(req, res){
  res.render('map', {
    markers : null,
    title: 'Map'
  });
});

module.exports = router;
