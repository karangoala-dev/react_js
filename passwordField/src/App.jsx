import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import './App.css'

function App() {
  const[visible, setVisible] = useState(false);

  return (
    <>
      <label>Password show / hide functionality shown here</label>
      <div className='password-main'>
        <input className='password-input' type={visible ? 'text': 'password'}></input>
        <button className='password-btn' onClick={()=>setVisible(!visible)}>{visible ? 'Show' : 'Hide'}</button>
      </div>
    </>
  )
}

export default App;
