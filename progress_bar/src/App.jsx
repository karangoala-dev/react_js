import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar';
import { useEffect } from 'react';

function App() {
  const[progress, setProgress] = useState(0);

  useEffect(()=>{
    for(let i = 0; i <= 10; i++){
      setTimeout(()=>{
        setProgress(10 * i);
      }, 500 * i);
    }
  }, []);

  return (
    <div className='main'>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress}/>
    </div>
  )
}

export default App;
