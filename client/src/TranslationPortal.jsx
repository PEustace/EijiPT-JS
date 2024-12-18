import { useState } from 'react'
import './App.css'
import axios from 'axios';

//Translation takes two arguments
//Chathistory for the translationa data and type to 
//reflect what will be returned to the user (and what is processed into).
async function CallChat(chatHistory, type) {
    const response = await axios.post('https://api.eustace.dev/api/chat/translate', {
        chatHistory: chatHistory,
        type: type})
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
    const [chatDisplayState, setChatDisplay] = useState();
    const [buttonTypeState, setButtonType] = useState('');
    function handleChange(e) {
        setChatValue(e.target.value);
    }
    //The initial axios request is async but we need additional async handling because
    //the call to OpenAI is async as well so that messes up the response
    async function handleSubmit(e) {
        e.preventDefault();
        setChatDisplay(await CallChat(userTextState, buttonTypeState));
        //This is the entire history of the chat
        console.log("Chat History: " + chatDisplayState);
        //In contrast, this is just the most recent message.
        //setDisplayValue(chatResponse[chatResponse.length-1].content);
        console.log(chatDisplayState);
        
    }
    return (
        <div className="translationClass">
        <form className="translationClass" onSubmit={handleSubmit}>
            <table className="translationClass">
                <tr>
                    <th>Translated Text</th>
                </tr>
                <tr>
                    
                    {//Only if both chatDisplay exists AND the state type is relevant
                    chatDisplayState ? <ChatBox value={chatDisplayState.content}></ChatBox> : <ChatBox value=""></ChatBox>}
                    
                </tr>
            </table>
        
        <textarea className="userEntry" id="chatBox" name="chatBox"
            value = {userTextState}
            onChange={handleChange}></textarea> <br></br>
            <button type="submit" value="english" onClick={() => setButtonType("english")}>To English</button>
            <button type="submit" value="japanese" onClick={() => setButtonType("japanese")}>To Japanese</button>
            </form>
        </div>
    );
}

//This is the chatbox component to display what the AI says, to be used as a subcomponent of ChatPortal
function ChatBox({value}) {
    //We're going to map the entire chat history. AI responses will be tagged with the id "assistant" whereas user will be "user"
    return(
        <td>{value}</td>
    )
}

/* axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })*/

export default ChatPortal