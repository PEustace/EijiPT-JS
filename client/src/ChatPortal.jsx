import { useState } from 'react'
import './App.css'
//import axios from 'axios';


/*function CallChat(chatType, userText) {
    axios.post("https://eijipt-js.azurewebsites.net/chat", {
        chatType: chatType, //Type of chat, i.e. basic tutor or translator
        userText: userText}) //User's text entered
    .then(response => {
        console.log(response.data.message)
    })
    .catch(error => {
        console.log(error);
        console.log(error.message);
    })
}*/
/*function CallChat(chatType, userText) {
    axios.get('https://eijipt-js.azurewebsites.net/api/chat').then((data) => {
        console.log(data);
    });
}*/


function ChatPortal() {
    const [userTextState, setChatValue] = useState('');
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://eijipt-js.azurewebsites.net/api/')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        //CallChat("user", userTextState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1> This is a demo for the app.</h1>
            <textarea id="userText" name="userText"
            value = {userTextState}
            onChange={handleChange}
            
            ></textarea>
            {/*it runs every re-render if we don't make it an arrow function*/}
            <button type="submit">^</button>
        </form>
        
    );
}

export default ChatPortal


/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/