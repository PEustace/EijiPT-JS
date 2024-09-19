import { useState } from 'react'
import './App.css'
import axios from 'axios';


//The idea is to prompt the open ai api to create the worksheet
//but to separate the answer key by a string code (in this case, @123).
//The exact worksheet format is up to the API call server-side.
//We're just delivering user parameters here--no text.
//So we construct a prompt based on the user's choices on the server side

//I'd like to keep /worksheet as the endpoint here even if the scope changes later (i.e. graded readings)
async function CallChat(userChoices) {
    const response = await axios.post("https://eijipt--ir11647.calmbush-099979f2.eastus.azurecontainerapps.io/api/chat/worksheet", {
        userChoices: userChoices})  //JSON data
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


function Worksheet() {
    const [userChoiceState, setChoiceValues] = useState('');
    const [chatDisplayState, setDisplayValue] = useState('');

    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response
    async function handleSubmit(e) {
        e.preventDefault();
        setDisplayValue("Worksheet Generating...");
        //In our chat page we're able to get by with just the text.
        //Here, that isn't so--it's important to read it as form data instead.

        var form = e.target;
        var formData = new FormData(form); //Lets us work with form data
        var formJson = Object.fromEntries(formData); //we need good ol Jason's help here to pass to server and for testing purposes

        setChoiceValues(formJson);
        //console.log(formJson);
        var chatPass = userChoiceState;
        var chatResponse = await CallChat(chatPass);
        setDisplayValue(chatResponse);
        console.log(chatResponse);
        
    }
    return (
        <form className="worksheetForm" onSubmit={handleSubmit}>
            <label htmlFor="difficultySelect">Level:</label>
            <select name="difficulty" id="difficultySelect" defaultValue={"basic easy"}>
                <option value="basic easy">Beginner</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
            </select>
            <label htmlFor="typeSelect">Focus:</label>
            <select name="type" id="typeSelect" defaultValue={"general"}>
                <option value="general">General</option>
                <option value="vocabulary">Vocabulary</option>
                <option value="matching">Matching</option>
                <option value="written">Written Response</option>
                <option value="graded reading">Graded Reading</option>
            </select>
            <label htmlFor="key" id="keySelect" defaultValue={"no"}>Answer Key?</label>
            <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            {/*it runs every re-render if we don't make it an arrow function. Or it did.*/}
            <button type="submit">Submit</button>

            <ChatBox chatResponse={chatDisplayState}></ChatBox>
        </form>
        
    );
}

//This is the chatbox component to display what the AI returns, to be used as a subcomponent of ChatPortal
function ChatBox({chatResponse}) {
    return(
        <p className="chatResponse">Eiji: {chatResponse ? chatResponse : "Please Submit Request."}</p>
    );
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default Worksheet;