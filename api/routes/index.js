var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  //res.sendFile('/index.html', {root: __dirname + '/../'});
  //res.send("Hello from the world of server stuff!")
  res.send("index.html");
});

module.exports = router;