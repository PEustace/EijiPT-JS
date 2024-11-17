import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//console.log("Hello.");
function Header() {
    return (
        <div className="navBar">
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
            <title>EijiPT</title>

            <h1 className="title">EijiPT</h1>

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/chatpage/">Ask a Question</a></li>
                    <li><a href="/practice/">Worksheets and Practice</a></li>
                    <li><a href="/translate/">Translation</a></li>
                    {/*This feature has been temporarily removed.*/
                    /*<li><a href="/travel/">Travel Help</a></li>*/}
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