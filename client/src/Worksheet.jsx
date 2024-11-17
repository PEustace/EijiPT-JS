import { useState } from 'react'
import './App.css'
import axios from 'axios';


//The idea is to prompt the open ai api to create the worksheet
//but to separate the answer key by a string code (in this case, @123).
//The exact worksheet format is up to the API call server-side.
//We're just delivering user parameters here--no text.
//So we construct a prompt based on the user's choices on the server side

//I'd like to keep /worksheet as the endpoint here even if the scope changes later (i.e. graded readings)
async function CallChat(difficulty, type) {
    const response = await axios.post("https://api.eustace.dev/api/chat/worksheet", {
        difficulty: difficulty,
        type: type }
        )  //JSON data
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

    //State to determine showing of the answer key.
    const [answerKeyState, setKeyVisibility] = useState(false);
    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response variable if not
    async function handleSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var formData = new FormData(form); //Lets us work with form data
        var formJson = {difficulty: formData.get("difficulty"), type: formData.get("type")}; 
        setDisplayValue("Worksheet Generating...");

        var difficulty = formJson.difficulty;
        var type = formJson.type;

        //setChoiceValues(formJson);
        //In our chat page we're hypothetically able to get by with just the text because that's all that matters,
        //so keeping up with states is easy. It's one value we're iterating on.
        //Here, that isn't so--it's important to read it as form data instead.
        //Could be worthwhile (for optimization) to move this server-side. But not necessary.
        //console.log(formJson);
        var chatResponse = await CallChat(difficulty, type);
        setDisplayValue(chatResponse);
        console.log(chatResponse);
    }
    return (
        <div>
        <form className="worksheetForm" onSubmit={handleSubmit}>
            <label htmlFor="difficultySelect">Level:</label>
            <select name="difficulty" id="difficultySelect" defaultValue={"basic easy"}>
                <option value="basic easy below N5">Beginner</option>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
            </select>
            <label htmlFor="typeSelect">Focus:</label>
            <select name="type" id="typeSelect" defaultValue={"general"}>
                <option value="general">General</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="life words">Life</option>
                <option value="school and college">School</option>
                <option value="graded paragraph reading">Graded Reading</option>
                <option value="written response">Written Response</option>
            </select>
            {/*it runs every re-render if we don't make it an arrow function. Or it did.*/}
            <button type="submit">Submit</button>
        </form>
        <div id="worksheet"className="worksheetClass">
        {
            chatDisplayState.worksheet ? chatDisplayState.worksheet.map((item, i) => 
            <WorksheetBox display={item} key={i} id={i} type={"questions"}></WorksheetBox>): 
            <p>Worksheet Pending. Please Submit or Wait.</p>
        }
        </div>
        <button hidden={chatDisplayState.answers ? false : true} onClick={() => setKeyVisibility(true)}>Reveal Answers</button>
        <div hidden={answerKeyState ? false : true} id="answers">
        {
            chatDisplayState.answers ? chatDisplayState.answers.map((item, i) => 
            <WorksheetBox display={item} key={i} id={i} type={"answers"}></WorksheetBox>): 
            <p>Worksheet Pending. Please Submit or Wait.</p>
        }
        </div>
        <button hidden={chatDisplayState.worksheet ? false : true} onClick={() => window.print()}>Print Page</button>
        </div>
        
    );
}

//This is the chatbox component to display what the AI returns, to be used as a subcomponent of ChatPortal
function WorksheetBox({display, id, type}) {
    //chatResponse = {__html: chatResponse}
    if (type != "answers") {
        if (id == 0 || id == 6 || id == 12) {
            return (
                <h3 className="worksheetClass" id={id}>{display}</h3>
            );
        }
        else {
            return(
                <p className="worksheetClass" id={id}>{display}</p>
            );
        }
    }
    else {
        return(
            <p className="worksheetClass" id={id}>{display}</p>
        );
    }
    
    
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default Worksheet;