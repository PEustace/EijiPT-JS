var express = require('express');
const chat = require('../my_modules/chat.mjs');
var router = express.Router();

//Accepting call for the chat to be executed.
//userChat, chatType params
router.post('/', function(req, res, next) {
    console.log("I got it.");
    chat.SendChat();
});

module.exports = router;