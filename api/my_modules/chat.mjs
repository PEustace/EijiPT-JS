import OpenAI from 'openai/index.mjs';
import express from 'express';
var router = express.Router();
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
    prompt = "You are a Japanese language tutor named Eiji (or 英字). You will act as if you are a human tutor. Break down things as best you can. Only help the user with Japanese."
    }
    //console.log("Funkiest monkiest.");
    const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:
            [{
            "role": "system",
            "content": prompt},
            
            {"role": "user", 
            "content": userValue
            }]
    }).catch((error) => {console.log(error)});

    console.log("About to send the choice.");
    console.log(completion.choices[0]);
    return completion.choices[0].message.content;

}

//Function for worksheet requests.
export async function RequestWorksheet(req) {
    var difficulty = req.body.difficulty;
    var type = req.body.type;
    var isKey = req.body.key;

    if (isKey) {
        isKey = ". Separate at the bottom with the string @123 and afterwords create only the answer key."
    }
    else {
        isKey = ".";
    }
    //Construct prompt
    var prompt = "Generate a formatted Japanese learning worksheet with a level of " + {difficulty} + ". The subject matter should be " + {type} + isKey + " No meta, html tags.";

    var response = ChatCompile(prompt, "none");

    return response.choices[0].message.content;
}

async function ChatCompile(prompt, userValue) {

    if (userValue == "system") {
        messageJson.push({"role": "system", "content": "You are a Japanese tutor bot."});
    }

    var messageJson = [{"role": "user", "content": prompt}];

    const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messageJson
    }).catch((error) => {console.log(error)});

    return completion;
}
//module.exports = SendChat;