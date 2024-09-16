import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import ChatPortal from './ChatPortal.jsx'
import './index.css'

//console.log("Hello.");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <a href="chatpage/index.html">Go To Chat</a>
  </StrictMode>,
)
