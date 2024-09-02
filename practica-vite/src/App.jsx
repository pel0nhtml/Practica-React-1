import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// Contenido de la página
  return (
    <>      
      <div>  
       <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Unknow</a></li>
          </ul>
        </div>
       </nav>
      </div>
    
    </>
  )
}

export default App
