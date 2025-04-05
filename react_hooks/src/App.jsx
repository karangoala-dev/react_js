import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>useState</h2>
      count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>useEffect</h2>
      <Link to="/useeffect">
        <button>Go to component</button>
      </Link>

      <h2>useRef</h2>
      <Link to="/useref">
        <button>Go to component</button>
      </Link>
    </>
  )
}

export default App
