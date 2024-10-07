import { useState } from 'react'
import './App.css'
import axios from 'axios';

async function CallChat(chatHistory) {
    if (chatHistory.length == 0) {
        chatHistory = "empty";
    }
    const response = await axios.post('https://api.eustace.dev/api/chat', {
        chatHistory: chatHistory})
    .catch(error => {
        return error;
    })
    console.log(response.data);
    return response.data;
}
/*function CallChat(chatType, userText) {
    axios.get('https://eijipt-js.azurewebsites.net/api/chat').then((data) => {
        console.log(data);
    });
}*/


function ChatPortal() {
    const [userTextState, setChatValue] = useState('');
    //State to manage chathistory until it's time to process
    const [chatHistoryState, setChatHistory] = useState([{"role": "system", "content": "You are Eiji (or 英字), a Japanese language tutor for an English speaker. You will act as if you are a human tutor. Keep things simple. Only help the user with this subject."}, {"role": "assistant", "content": "Hello, I am Eiji, your personal Japanese tutor! If you have questions about grammar, vocabulary, culture, or anything else, ask away!"}]);
    
    function handleChange(e) {
        setChatValue(e.target.value);
    }
    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response
    async function handleSubmit(e) {
        e.preventDefault();
        setChatValue('');
        setChatHistory([...chatHistoryState, {"role": "user", "content": userTextState}]);
        console.log(chatHistoryState);
        setChatHistory(await CallChat([...chatHistoryState, {"role": "user", "content": userTextState}]));
        //This is the entire history of the chat
        console.log("Chat History: " + chatHistoryState);
        //In contrast, this is just the most recent message.
        //setDisplayValue(chatResponse[chatResponse.length-1].content);
        console.log(chatHistoryState);
        
    }
    return (
        <form className="chatForm" onSubmit={handleSubmit}>
            <table>
            {
                
                chatHistoryState ? chatHistoryState.map((item, i) => <ChatBox key={i} chatResponse={item}></ChatBox>) : <p className="assistant">Hello, I am Eiji, your personal Japanese tutor! If you have questions about grammar, vocabulary, culture, or anything else, ask away!</p>
                
            }
            </table>
            <textarea className="userEntry" id="chatBox" name="chatBox"
            value = {userTextState}
            onChange={handleChange}></textarea>
            {/*it runs every re-render if we don't make it an arrow function. Or it did.*/}
            <button type="submit">^</button>
        </form>
        
    );
}

//This is the chatbox component to display what the AI says, to be used as a subcomponent of ChatPortal
function ChatBox({chatResponse}) {
    //We're going to map the entire chat history. AI responses will be tagged with the id "assistant" whereas user will be "user"
    if (chatResponse.role != "system") {
        return(
            <tr><p className={chatResponse.role}>{chatResponse.content}</p></tr>
        );
    }
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default ChatPortal