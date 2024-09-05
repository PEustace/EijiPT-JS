var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello from the server!!");
});

module.exports = router;
