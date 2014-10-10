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
  var collection = db.get('incidents').fi;
  collection.find({locationName:{$exists:true}},{},function(e,docs){
    res.render('incidents', {
      incidents : entity,
      title: 'Incidents'
    });
  });
});
module.exports = router;
