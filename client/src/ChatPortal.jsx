import { useState } from 'react'
import './App.css'
import axios from 'axios';


function CallChat(chatType, userText) {
    axios.post("https://eijipt-js.azurewebsites.net/chat", {"chatType": chatType, "userText": userText})
    .then(response => {
        console.log(response.data.message)
    })
}

function ChatPortal() {
    const [userChat, setChatValue] = useState('');
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }

    return (
        <form>
            <h1> This is a demo for the app.</h1>
            <textarea id="userChat" name="userChat"
            value = {userChat}
            onChange={handleChange}
            
            ></textarea>
            <button onClick={CallChat("user", userChat)}>^</button>
        </form>
        
    );
}

export default ChatPortal


/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/