import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import Worksheet from './Worksheet.jsx'
import './index.css'

//console.log("Hello.");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Worksheet />
  </StrictMode>,
);