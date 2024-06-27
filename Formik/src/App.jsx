import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div form>
    <form>
    <label htmlFor='firstname'>Firstname</label>
    <input type="text"  id="firstname" />
    <label htmlFor='lastname'>lastname</label>
    <input type="text"  id="lastname" />
    <label htmlFor='emailaddress'>emailaddress</label>
    <input type="text"  id="emailaddress" />
    <button>submit</button>
    </form>
      </div>  
    </>
  )
}

export default App
