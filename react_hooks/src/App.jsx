import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5>useState starts</h5>
      count: {count}
      <br/>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count - 1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <h5>useState ends</h5>
    </>
  )
}

export default App
