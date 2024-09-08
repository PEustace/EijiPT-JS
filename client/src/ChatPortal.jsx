import { useState } from 'react'
import './App.css'
import axios from 'axios';


function CallChat(chatType, userText) {
    axios.post("http://localhost:3000/api/chat", {
        chatType: chatType, //Type of chat, i.e. basic tutor or translator
        userText: userText}) //User's text entered
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        console.log(error);
        console.log(error.message);
    })
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

    function handleSubmit(e) {
        e.preventDefault();
        var chatResponse = CallChat("user", userTextState);
        setDisplayValue(chatResponse);
        console.log(chatResponse);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1> This is a demo for the app.</h1>
            <textarea id="userText" name="userText"
            value = {userTextState}
            onChange={handleChange}
            
            ></textarea>
            <h1>Eiji: {chatDisplayState} </h1>
            {/*it runs every re-render if we don't make it an arrow function*/}
            <button type="submit">^</button>
        </form>
        
    );
}

export default ChatPortal


/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/