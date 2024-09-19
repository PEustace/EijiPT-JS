import { useState } from 'react'
import './App.css'
import axios from 'axios';


//The idea is to prompt the open ai api to create the worksheet
//but to separate the answer key by a string code (in this case, @123).
//The exact worksheet format is up to the API call server-side.
//We're just delivering user parameters here--no text.

//I'd like to keep /worksheets as the endpoint here even if the scope changes later (i.e. graded readings)
async function CallChat(chatType, userText) {
    const response = await axios.post("https://eijipt--ir11647.calmbush-099979f2.eastus.azurecontainerapps.io/api/worksheets", {
        chatType: chatType, //Type of chat, i.e. basic tutor or translator
        userText: userText}) //User's text entered
    .catch(error => {
        console.log(error);
        console.log(error.message);
    })
    return response.data;
}
/*function CallChat(chatType, userText) {
    axios.get('https://eijipt-js.azurewebsites.net/api/chat').then((data) => {
        console.log(data);
    });
}*/


function ChatPortal() {
    const [userChoiceState, setChoiceValues] = useState('');
    const [chatDisplayState, setDisplayValue] = useState('');

    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response
    async function handleSubmit(e) {
        e.preventDefault();
        //In our chat page we're able to get by with just the text.
        //Here, that isn't so--it's important to read it as form data instead.
        setChoiceValues(new FormData(e.target))
        console.log(userChoiceState);
        //var chatPass = userChoiceState;
        //var chatResponse = await CallChat("user", chatPass);
        //setDisplayValue(chatResponse);
        //console.log(chatResponse);
        
    }
    return (
        <form className="worksheetForm" onSubmit={handleSubmit}>
            

            <label htmlFor="difficultySelect">Level:</label>
            <select name="difficultySelect" id="difficultySelect">
                <option value="basic easy">Beginner</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
            </select>
            <label htmlFor="typeSelect">Focus:</label>
            <select name="typeSelect" id="typeSelect">
                <option value="general">General</option>
                <option value="vocabulary">Vocabulary</option>
                <option value="matching">Matching</option>
                <option value="written">Written Response</option>
                <option value="graded reading">Graded Reading</option>
            </select>
            {/*it runs every re-render if we don't make it an arrow function. Or it did.*/}
            <button type="submit">^</button>

            <ChatBox chatResponse={chatDisplayState}></ChatBox>
        </form>
        
    );
}

//This is the chatbox component to display what the AI says, to be used as a subcomponent of ChatPortal
function ChatBox({chatResponse}) {
    return(
        <p className="chatResponse">Eiji: {chatResponse ? chatResponse : "Worksheet Generating..."}</p>
    );
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default ChatPortal