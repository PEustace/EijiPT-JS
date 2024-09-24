//This is a toolkit with documentation for various aspects of the program.
//It also includes relevant code to allow one to test code without cluttering it up.
//
//
//
//
//---

//import {useState} from 'react'
import axios from 'axios';

class Toolkit {
    //VERY EXPLICITLY: DO NOT USE THE INGRESS ENDPOINT
    //For whatever reason, using the ingress endpoint is a dead end... point. Doesn't work. 
    //Use the application URL from now on--you can find by going to:
    //Azure->Container Apps->Managed Environment->Container App->Browse
    //Copy that URL. Use /api for a test call which should return "Hello!"
    //Everything after follows that (i.e. /api/chat or /api/chat/worksheets)

    //Log this to the console w/ test url
    async TestCall(testURL) {
        console.log("Sending!");
        const response = axios.get(testURL).catch(error => console.log(error.message));
        return response;
    }

    //Button component that runs a testcall for testing on the page side of things.
    //Add to the page as a React component and it should handle the rest.
    
    //DISABLED
    //TestButton(testURL) {
    //    This state is just to handle the call's response, which will set the button appearance
    //    async function handleSubmit(e) {
    //        e.preventDefault();
    //        setCallResponse = Test
    //    }
    //    return(
    //        <button action={handleSubmit}>{testCallResponse ? testCallResponse : "Test Pending."}</button>
    //    );
    //}
}

export default Toolkit;