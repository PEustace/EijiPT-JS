var express = require('express');
var router = express.Router();

var chat;

//Importing the module that will allow communication with openai
async function pullModule() {
    chat = await import('../my_modules/chat.mjs')
}

pullModule();

//Accepting call for the chat to be executed.
//userChat, chatType params
router.post('/', async function(req, res, next) {
    console.log("Chat request received.");
    const response = await chat.SendChat(req.body.chatType, req.body.userText);
    console.log("Response: " + response);
    res.send(response);
});

router.post('/worksheet', async function(req, res, next) {
    console.log("Worksheet request received.")
    const response = await chat.RequestWorksheet(req.body);
})

module.exports = router;