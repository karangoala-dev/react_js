import { useState } from 'react';
import './App.css'


const OTP_DIGITS = 6;

function App() {
  //initialise an empty array with blank value
  const[inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));

  return (
    <div className='main'>
      <h1 className='header'>
        OTP Input
      </h1>
      <div className='otp-secn'>
        {
          inputArr.map((item, i) => <input className='digit' value={inputArr[i]} />)
        }
      </div>
    </div>
  )
}

export default App
