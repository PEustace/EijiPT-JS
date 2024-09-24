import { useState } from 'react'
import './App.css'
import axios from 'axios';


//The idea is to prompt the open ai api to create the worksheet
//but to separate the answer key by a string code (in this case, @123).
//The exact worksheet format is up to the API call server-side.
//We're just delivering user parameters here--no text.
//So we construct a prompt based on the user's choices on the server side

//I'd like to keep /worksheet as the endpoint here even if the scope changes later (i.e. graded readings)
async function CallChat(difficulty, type, key) {
    const response = await axios.post("https://eijiptjs-api.blueforest-1a6441a0.eastus.azurecontainerapps.io/api/chat/worksheet", {
        difficulty: difficulty,
        type: type,
        key: key})  //JSON data
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
    //const [userChoiceState, setChoiceValues] = useState('');
    const [chatDisplayState, setDisplayValue] = useState('');

    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response variable if not
    async function handleSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var formData = new FormData(form); //Lets us work with form data
        var formJson = {difficulty: formData.get("difficulty"), type: formData.get("type"), key: formData.get("key")}; //we need good ol Json's help here to pass to server and for testing purposes
        setDisplayValue("Worksheet Generating...");

        var difficulty = formJson.difficulty;
        var type = formJson.type;
        var key = formJson.key;

        //setChoiceValues(formJson);
        //In our chat page we're able to get by with just the text because that's all that matters.
        //Here, that isn't so--it's important to read it as form data instead.
        //Could be worthwhile (for optimization) to move this server-side.
        //console.log(formJson);
        var chatResponse = await CallChat(difficulty, type, key);
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
            <label htmlFor="key" id="keySelect">Answer Key?</label>
            <select id="keySelect" name="key" defaultValue={"no"}>
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