import { useState } from 'react'
import './App.css'
import { useCallback,useRef } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  console.log("re-rendering")
  // noteRef holds a reference to note, allowing us to always access the latest value without worrying about outdated closures / state value.
  //if noteRef was useState, i.e. noteref was not present and we used note state, we would have referenced the old value of note as When noteref was created->
  //Since, due to usecallback and it's empty dependency array we would have not re-created the fn when note value was updated, and hence,
  //the throttled version of handleClick would have the old "note" value in it's closure
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
    setNotes(prevNotes => [...prevNotes, noteRef.current]);

    setNote("");
  };

  //This fn is a throttled version of the handleClick fn.
  //UseCallback is required so that the last call value is not again set to 0;
  const throttledHandleClick = useCallback(throttled(handleClick, 10000), []);

  return (
    <>
      {notes.map((item, index) => <div key={index}>{item}</div>)}
      <input type='text' value={note} onChange={handleChange}></input>
      <button onClick={throttledHandleClick}>Add note</button>
    </>
  )
}

export default App
