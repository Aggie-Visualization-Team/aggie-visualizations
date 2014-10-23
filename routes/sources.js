var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/* GET source docs. */
router.get('/', function(req, res) {
  req.db.get('sources').find({},{},function(e,docs){
    res.render('sources', {
      sources : docs,
      title: 'Sources'
    });
  });
});

/* GET source by id */
router.get('/:id', function(req, res) {
  req.db.get('sources').findOne({'_id': ObjectId(req.params['id'])},{},function(e,source){
    res.render('source', {
        source: source,
        title: 'Sources',
        date: new Date(source.datetime).toString()
    });
  });
});

module.exports = router;
