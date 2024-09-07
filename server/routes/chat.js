import OpenAI from 'openai';
var express = require('express');
var router = express.Router();

const openai = new OpenAI();

//DO NOT LEAVE THIS IN WHEN PUBLIC
const APIKey = "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"

//Accepting call for the chat to be executed.
//userChat, chatType params
router.get('/', function(req, res, next) {
    //res.sendFile('/index.html', {root: __dirname + '/../'});
    var chatType = req.query.chatType;
    var userText = req.query.userText;
    var prompt = "Introduce yourself.";

    if (chatType == "user") {
    var prompt = "You are a Japanese language tutor. Introduce yourself and respond to the user's request."
    }

    const completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=
            [{
            "role": "system",
            "content": prompt},
            
            {"role": "user", 
            "content": userText
            }],
        headers={
            'Authorization': APIKey
        }
    )

    res.send(completion.choices[0]);
});

module.exports = router;