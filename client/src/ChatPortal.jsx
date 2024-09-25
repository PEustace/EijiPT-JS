import { useState } from 'react'
import './App.css'
import axios from 'axios';

async function CallChat(chatType, userText) {
    const response = await axios.post('https://api.eustace.dev/api/chat/', {
        chatType: chatType, //Type of chat, i.e. basic tutor or translator
        userText: userText}) //User's text entered
    .catch(error => {
        return error;
    })
    return response.data;
}
/*function CallChat(chatType, userText) {
    axios.get('https://eijipt-js.azurewebsites.net/api/chat').then((data) => {
        console.log(data);
    });
}*/


function ChatPortal() {
    const [userTextState, setChatValue] = useState('');
    const [chatDisplayState, setDisplayValue] = useState('');
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }
    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response
    async function handleSubmit(e) {
        e.preventDefault();
        var chatPass = userTextState;
        setChatValue('');
        //var test = await TestCall();
        //console.log(test);
        var chatResponse = await CallChat("user", chatPass);
        setDisplayValue(chatResponse);
        console.log(chatResponse);
        
    }
    return (
        <form className="chatForm" onSubmit={handleSubmit}>
            <ChatBox chatResponse={chatDisplayState}></ChatBox>
            <textarea className="userEntry" id="chatBox" name="chatBox"
            value = {userTextState}
            onChange={handleChange}
            
            ></textarea>
            {/*it runs every re-render if we don't make it an arrow function. Or it did.*/}
            <button type="submit">^</button>
        </form>
        
    );
}

//This is the chatbox component to display what the AI says, to be used as a subcomponent of ChatPortal
function ChatBox({chatResponse}) {
    return(
        <div className="eijiResponse">
            <p>Eiji: {chatResponse ? chatResponse : "Hello, I'm Eiji, your personal Japanese tutor! If you have questions about grammar, vocabulary, culture, or anything else, ask away!"}</p>
        </div>
        
    );
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default ChatPortal