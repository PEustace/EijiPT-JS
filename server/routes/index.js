var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('/index.html', {root: __dirname + '/../'});
  res.send("Hello from the world of server stuff!")
});

module.exports = router;