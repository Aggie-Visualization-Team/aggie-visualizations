var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('sources');
  collection.find({},{},function(e,docs){
    res.render('sources', {
      sources : docs,
      title: 'Sources'
    });
  });
});

router.get('/:id', function(req, res) {
  var db = req.db;
  var entity = db.get('sources').find({'_id': ObjectId(req.params['id'])},{},function(e,docs){
  res.render('source', {
      source: docs[0],
      title: 'Sources',
      date: new Date(docs[0].datetime).toString()
    });
  });
});

module.exports = router;
