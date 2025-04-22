import { useState } from 'react'
import './App.css'
import useScreenSize from './hooks/useScreenSize'
import useDebounceValue from './hooks/useDebounceValue';
import { useEffect } from 'react';
import useDebounce from './hooks/useDebounce';

function App() {
  const [count, setCount] = useState(0);
  const debouncedCount = useDebounceValue(count, 500);
  const [width, height] = useScreenSize();
  const [input, setInput]  = useState("");

  //useDebouncedValue hook
  useEffect(()=>{
    console.log("Fn executed with debouncing at play " + count);
  }, [debouncedCount]);

  //useDebounce hook
  const dummyFn = () => {
    console.log("Hello, this fn call is debounced , latest text is : " + input);
  }

  const debouncedFn = useDebounce(dummyFn, 500);  

  useEffect(()=>{
    debouncedFn();
  }, [input]);

  return (
    <>
      <h1>Width : {width}</h1>
      <h1>Height : {height}</h1>
      <br/><br/>
      Below button will use useDebouncedValue <br/>
      <button onClick={()=>setCount(count + 1)}>Check console for debounced value</button><br/>
      <br/><br/>
      Below text box uses useDebounce fn<br/>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/><br/>
    </>
  )
}

export default App
