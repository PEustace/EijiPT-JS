var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', (req, res) => {
  //res.sendFile('/index.html', {root: __dirname + '/../'});
  //res.send("Hello from the world of server stuff!")
  res.send("Hello!");
});

module.exports = router;