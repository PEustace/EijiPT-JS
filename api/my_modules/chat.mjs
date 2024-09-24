//An all-purpose chat interaction module made as the backbone of the API
//communication in EijiPT

import OpenAI from 'openai/index.mjs';
//import express from 'express';

const APIKey = "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";
const client = new OpenAI({apiKey: APIKey});
//DO NOT LEAVE THIS IN WHEN PUBLIC
var prompt = "Translate.";

export async function SendChat(reqChatType, reqUserText) {
    //console.log("Funky monkey");
    //res.sendFile('/index.html', {root: __dirname + '/../'});
    var chatType = reqChatType;
    console.log(chatType);
    //console.log("Funkier monkier.");
    var userText = reqUserText;
    console.log("User text!");
    console.log(userText);
    

    if (chatType == "user") {
    prompt = "You are a Japanese language tutor for an English speaker named Eiji (or 英字). You will act as if you are a human tutor. Keep things simple. Only help the user with this subject."
    }
    //console.log("Funkiest monkiest.");
    const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:
            [{
            "role": "system",
            "content": prompt},
            
            {"role": "user", 
            "content": userText
            }]
    }).catch((error) => {console.log(error)});

    console.log("About to send the choice.");
    console.log(completion.choices[0]);
    return completion.choices[0].message.content;

}
//
//
//Function for worksheet requests.
export async function RequestWorksheet(difficultyPass, typePass, keyPass) {
    console.log("Reqpass: " + difficultyPass + typePass + keyPass);
    var difficulty = difficultyPass;
    var type = typePass;
    var isKey = keyPass;

    if (isKey == "yes") {
        isKey = ". Separate at the bottom with the string @123 and afterwords create only the answer key."
    }
    else {
        isKey = ".";
    }
    //Construct prompt
    var prompt = "Generate an HTML-form-formatted Japanese learning worksheet with three sections with a level of " + difficulty + ". The subject matter should be " + type + isKey + " Give only the html tags that can slot into an existing <body>, so no doctype or <html>, etc. No submit button.";

    var response = ChatCompile(prompt);

    return response;
}

async function ChatCompile(prompt) {

    //userValue removed

    //if (userValue == "system") {
    //  messageJson.push({"role": "system", "content": "You are a Japanese tutor bot."});
    //}

    var messageJson = {"role": "system", "content": prompt};
    console.log(messageJson);

    const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [messageJson]
    }).catch((error) => {console.log(error)});

    return completion.choices[0].message.content;
}
//module.exports = SendChat;