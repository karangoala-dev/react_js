import { useState, useRef } from 'react';
import './App.css'


const OTP_DIGITS = 6;

function App() {
  //initialise an empty array with blank value
  const[inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    if(isNaN(value)){
      return;
    }
    const newValue = value.trim();
    const dummyArr = [...inputArr];
    dummyArr[index] = newValue;
    setInputArr(dummyArr);
  }

  return (
    <div className='main'>
      <h1 className='header'>
        OTP Input
      </h1>
      <div className='otp-secn'>
        {
          inputArr.map((item, i) => <input key={i} className='digit' value={inputArr[i]} onChange={(e)=>handleChange(e.target.value, i)}/>)
        }
      </div>
    </div>
  )
}

export default App
