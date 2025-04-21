import { useState } from 'react'
import './App.css'
import useScreenSize from './hooks/useScreenSize'
import useDebounceValue from './hooks/useDebounceValue';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const debouncedCount = useDebounceValue(count, 500);
  const [width, height] = useScreenSize();

  useEffect(()=>{
    console.log("Fn executed with debouncing at play " + count);
  }, [debouncedCount]);

  return (
    <>
      <h1>Width : {width}</h1>
      <h1>Height : {height}</h1>
      <button onClick={()=>setCount(count + 1)}>Check console</button>
    </>
  )
}

export default App
