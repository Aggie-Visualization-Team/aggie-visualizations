var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get('incidents');
  collection.find({locationName:{$exists:true}},{limit:50},function(e,docs){
    res.render('incidents', {
      incidents : docs,
      title: 'Incidents'
    });
  });
});

router.get('/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('incidents');
  collection.find({'_id': ObjectId(req.params['id'])},{},function(e,docs){
    res.render('incidents', {
      incidents : docs[0],
      title: 'Incidents'
    });
  });
});
module.exports = router;
