var express = require('express');
var router = express.Router();

var chat;

//Importing the module that will allow communication with openai
async function pullModule() {
    chat = await import('../my_modules/chat.mjs');
    worksheet = await import('../my_modules/worksheet_processing.mjs');
}

pullModule();
//test

//Accepting call for the chat to be executed.
//userChat, chatType params
router.post('/', async function(req, res, next) {
    console.log("Chat request received.");
    const response = await chat.SendChat(req.body.chatHistory);
    console.log("Response: " + response);
    res.send(response);
});

//Outdated worksheet handling method
router.post('/worksheet_old', async function(req, res, next) {
    console.log("Worksheet request received.");
    const response = await chat.RequestWorksheet(req.body.difficulty, req.body.type);
    res.send(response);
});
router.post('/worksheet', async function (req, res, next) {
    console.log("Testing worksheet build...");
    var worksheet_data = await worksheet.ProcessWorksheet(await chat.RequestWorksheet(req.body.difficulty, req.body.type));
    console.log("Finished worksheet: " + worksheet_data);
    res.send(worksheet_data);
});

module.exports = router;