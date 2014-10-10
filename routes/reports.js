var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;


/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('reports');
  collection.find({},{limit:50},function(e,docs){
    res.render('reports', {
      reports : docs,
      title: 'Reports'
    });
  });
});

router.get('/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('reports');
  collection.find({'_id': ObjectId(req.params['id'])},{},function(e,docs){
    res.render('report', {
      report : docs[0],
      title: 'Reports'
    });
  });
});

module.exports = router;
