var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({"Hello":"updated code"})
});

router.post('/add', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req);
  console.log(req.body);
  console.log(req.body.name);
  
  res.json({"success":true})
});

module.exports = router;
