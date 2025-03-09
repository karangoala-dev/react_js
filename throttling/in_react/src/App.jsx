import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const handleChange = (e)=>{
    setNote(e.target.value);
  }

  return (
    <>
      {notes?.map((item) => <div>{item}</div>)}
      <input type='text' value={note} onChange={handleChange}></input>
    </>
  )
}

export default App
