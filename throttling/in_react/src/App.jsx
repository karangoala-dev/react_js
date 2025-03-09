import { useState } from 'react'
import './App.css'
import { useCallback,useRef } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const noteRef = useRef(note);

  //This fn is used to set the note value
  const handleChange = (e)=>{
    setNote(e.target.value);
    noteRef.current = e.target.value;
  }

  //This factory fn will throttleise any callback fn passed to it
  const throttled = (fn, delay) => {
    let lastCall = 0;
    return function(...args){
      let currentTime = Date.now();
      console.log(currentTime - lastCall);
      if(currentTime - lastCall < delay){
        console.log("Not Adding")
        return;
      }
      console.log("Adding since delay is passed", ...args);
      lastCall = currentTime;
      fn(...args);
    };
  }

  //This fn is used to add the current note value to the notes array
  const handleClick = () => {
    setNotes(prevNotes => [...prevNotes, noteRef.current])

    // setNote("");
  };

  //This fn is a throttled version of the handleClick fn.
  const throttledHandleClick = useCallback(throttled(handleClick, 2000), []);

  return (
    <>
      {notes.map((item, index) => <div key={index}>{item}</div>)}
      <input type='text' value={note} onChange={handleChange}></input>
      <button onClick={throttledHandleClick}>Add note</button>
    </>
  )
}

export default App
