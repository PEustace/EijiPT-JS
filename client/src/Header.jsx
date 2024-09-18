import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//console.log("Hello.");
function Header() {
    return (
        <div className="navBar">
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>

            <h1 className="title">EijiPT</h1>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Worksheets</li>
                    <li>Travel</li>
                </ul>
            </nav>
        </div>
    );
}

createRoot(document.getElementById('head')).render(
    <StrictMode>
      <Header/>
    </StrictMode>
  );


export default Header