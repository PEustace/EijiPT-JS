import { useState } from 'react'
import './App.css'
import axios from 'axios';


async function CallChat(chatType, userText) {
    const response = await axios.post("https://eustace.dev/api/chat", {
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
    const [userTextState, setChatValue] = useState('');
    const [chatDisplayState, setDisplayValue] = useState('');
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var chatPass = userTextState;
        setChatValue('');
        var chatResponse = await CallChat("user", chatPass);
        setDisplayValue(chatResponse);
        console.log(chatResponse);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1> EijiPT</h1>
            <ChatBox chatResponse={chatDisplayState}></ChatBox>
            <textarea id="userText" name="userText"
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
        <p>Eiji: {chatResponse ? chatResponse : "Hello, I'm Eiji, your personal Japanese tutor! If you have questions about grammar, vocabulary, culture, or anything else, ask away!"}</p>
    );
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default ChatPortal