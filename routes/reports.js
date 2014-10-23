var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;


/* GET report docs. */
router.get('/', function(req, res) {
  req.db.get('reports').find({},{limit:50},function(e,docs){
    res.render('reports', {
      reports : docs,
      title: 'Reports'
    });
  });
});

/*GET report by id */
router.get('/:id', function(req, res) {
  req.db.get('reports').findOne({'_id': ObjectId(req.params['id'])},{},function(e,report){
    res.render('report', {
      report : report,
      title: 'Reports'
    });
  });
});

module.exports = router;
