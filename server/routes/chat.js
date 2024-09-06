var express = require('express');
var router = express.Router();

//Accepting call for the chat to be executed.
//userChat, chatType params
router.get('/chat', function(req, res, next) {
  //res.sendFile('/index.html', {root: __dirname + '/../'});
  var chatType = req.query.chatType;
  var userChat = req.query.userChat;
});

module.exports = router;