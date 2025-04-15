import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <label>Password show / hide functionality shown here</label>
      <div>
        <input></input>
        <button></button>
      </div>
    </>
  )
}

export default App
