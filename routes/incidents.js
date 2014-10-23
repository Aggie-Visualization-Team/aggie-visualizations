var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;


/* GET incident docs */
router.get('/', function(req, res) {
  req.db.get('incidents').find({locationName:{$exists:true}},{limit:50},function(e,docs){
    res.render('incidents', {
      incidents : docs,
      title: 'Incidents'
    });
  });
});

/* GET incident by id */
router.get('/:id', function(req, res) {
  req.db.get('incidents').findOne({'_id': ObjectId(req.params['id'])},{},function(e,incident){
    res.render('incident', {
      incident : incident,
      title: 'Incidents'
    });
  });
});

module.exports = router;
