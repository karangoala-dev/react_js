import { useState } from 'react'
import './App.css'

function App() {
  const[chips, setChips] = useState([]);
  const[input, setInput] = useState("");
  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      const trimmed = input.trim();
      if(trimmed){
        setChips((prev) => [...prev, input]);
        setInput("");
      }
    }
  }
  const deleteChip = (ind) => {
    setChips(chips.filter((i, index)=>index != ind));
  }
  return (
    <div className='main'>
      <h2>Type in some text and press enter to add a chip</h2>
      <div><input type = "text" className='text-ip' value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={handleKeyDown}/></div>
      <div className='chips-container'>
        {chips && chips.map((i, ind) => (<div key={ind} className='chip'>{i}<button className='del-btn' onClick={()=>deleteChip(ind)}>❌</button></div>))}
      </div>
    </div>
  )
}

export default App
