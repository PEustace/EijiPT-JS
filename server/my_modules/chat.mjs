import OpenAI from 'openai';
import express from 'express';
var router = express.Router();
const client = new OpenAI();
//DO NOT LEAVE THIS IN WHEN PUBLIC
const APIKey = "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"


function SendChat() {
    //res.sendFile('/index.html', {root: __dirname + '/../'});
    var chatType = req.body.chatType;
    console.log(chatType);
    var userText = req.body.userText;
    console.log("User texts!");
    console.log(userText);
    var prompt = "Introduce yourself.";

    if (chatType == "user") {
    var prompt = "You are a Japanese language tutor. Introduce yourself and respond to the user's request."
    }

    const completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=
            [{
            "role": "system",
            "content": prompt},
            
            {"role": "user", 
            "content": userText
            }]
    )
    console.log("About to send the choice.");
    console.log(completion.choices[0]);
    res.send(completion.choices[0]);

}
module.exports = SendChat;