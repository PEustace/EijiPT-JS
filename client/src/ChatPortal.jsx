import { useState } from 'react'
import './App.css'
import axios from 'axios';


function CallChat(chatType, userText) {
    axios.put("https://eijipt-js.azurewebsites.net/chat", {
        chatType: chatType, //Type of chat, i.e. basic tutor or translator
        userText: userText}) //User's text entered
    .then(response => {
        console.log(response.data.message)
    })
    .catch(error => {
        console.log(error);
        console.log(error.message);
    })
}

function ChatPortal() {
    const [userChat, setChatValue] = useState('');
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        CallChat("user", userChat);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1> This is a demo for the app.</h1>
            <textarea id="userChat" name="userChat"
            value = {userChat}
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