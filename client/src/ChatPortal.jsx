import { useState } from 'react'
import './App.css'
import axios from 'axios';


function CallChat(chatType, userText) {
    axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })
}

function ChatPortal() {
    return (
        <form>
            <h1> This is a demo for the app.</h1>
            <textarea>Type Here.</textarea>
            <button onClick={CallChat("basic")}>^</button>
        </form>
        
    );
}

export default ChatPortal