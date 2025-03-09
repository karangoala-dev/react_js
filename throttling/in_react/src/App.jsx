import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  //This fn is used to set the note value
  const handleChange = (e)=>{
    setNote(e.target.value);
  }

  //This factory fn will throttleise any callback fn passed to it
  const throttled = (fn, delay) => {
    let lastCall = 0;
    return function(...args){
      let currentTime = Date.now();
      if(currentTime - lastCall < delay){
        return;
      }
      lastCall = currentTime;
      fn(...args);
    };
  }

  //This fn is used to add the current note value to the notes array
  const handleClick = () => {
    setNotes([...notes, note]);
    // setNote("");
  }

  //This fn is a throttled version of the handleClick fn.
  const throttledHandleClick = throttled(handleClick, 2000);

  return (
    <>
      {notes.map((item, index) => <div key={index}>{item}</div>)}
      <input type='text' value={note} onChange={handleChange}></input>
      <button onClick={throttledHandleClick}>Add note</button>
    </>
  )
}

export default App
