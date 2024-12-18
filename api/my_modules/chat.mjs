//An all-purpose chat interaction module made as the backbone of the API
//communication in EijiPT

//This module is all portions that interact directly with OpenAI

import OpenAI from 'openai/index.mjs';
//import express from 'express';

const APIKey = "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";
const client = new OpenAI({apiKey: APIKey});
//DO NOT LEAVE THIS IN WHEN PUBLIC
var prompt = "Translate.";

export async function SendChat(chatHistory) {
    //console.log("Funky monkey");
    //res.sendFile('/index.html', {root: __dirname + '/../'});
    //console.log("Funkier monkier.");
    console.log("ReqChatHistory: " + chatHistory);

    const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: chatHistory
    }).catch((error) => {console.log(error)});

    //Make sure to add the response to the chat history
    chatHistory.push(completion.choices[0].message);
    console.log("About to send the choice.");
    console.log(completion.choices[0]);
    return chatHistory;

}
//
//
//Function for worksheet requests.
export async function RequestWorksheet(difficultyPass, typePass) {
    console.log("Reqpass: " + difficultyPass + typePass);
    var difficulty = difficultyPass;
    var type = typePass;
    //Construct prompt
    var prompt = "Build an array of JSON data for a Japanese language quiz for an English speaker with 3 sections (each being a separate object in the array) themed around " + type + ". Each section should have five questions. Make the key the question number that counts the number it is so far and make the value the question. Make it " + difficulty + " level and keep it simple. Vary the types of sections as a real quiz. Do not provide other text. Format as such with these specific key naming conventions: {'section': the name of the section, 1: 'Question 1 Here'} etc Also generate an answer key after the sections. Name this section key/value 'section': 'Answer Key'. The answer key should only be in either romaji or kana. Use otherwise proper JSON format. Do not include formatting tags. Give plain text.";

    console.log("Difficulty: " + difficulty);
    console.log("Type :" + type);
    var response = ChatCompileSend(prompt);
    
    return response;
}

//Requests a translation of the provided text, type data
export async function RequestTranslation(chatHistory, type) {
    var prompt = "You are a Japanese translation machine. Translate the following into " + type + ": " + chatHistory + ". Format as raw JSON data {\"content\": the translation, \"type\": \"" + type + "\".  Do not include formatting. Deliver as a plain string.";

    var response = ChatCompileSend(prompt);

    return response;
}

async function ChatCompileSend(prompt) {

    //userValue removed

    //if (userValue == "system") {
    //  messageJson.push({"role": "system", "content": "You are a Japanese tutor bot."});
    //}

    var messageJson = {"role": "system", "content": prompt};
    console.log(messageJson);

    const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [messageJson]
    }).catch((error) => {console.log(error)});

    return completion.choices[0].message.content;
}
//module.exports = SendChat;