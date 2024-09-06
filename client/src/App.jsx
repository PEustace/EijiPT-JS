//import { useState } from 'react'
import './App.css'
import axios from 'axios';


function APICall_Test() {
    axios.get('https://eijipt-js.azurewebsites.net').then((data) => {
        console.log(data);
    })
}

function App() {

    return (
        <div>
        <h1>
            This is a demo for the app.
        </h1>
        <button onClick={APICall_Test}>Test Call</button>
        </div>
    );
}

export default App