var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Aggie Visualization Test' });
});


router.get('/map', function(req, res){
  var db = req.db;
  var collection = db.get('incidents');
  collection.find({locationName:{$exists:true}},{limit:100},function(e,docs){
    res.render('map', {
      markers : docs,
      title: 'Map'
    });
  });
});
module.exports = router;