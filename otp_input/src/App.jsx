import { useState, useRef } from 'react';
import './App.css'
import { useEffect } from 'react';


const OTP_DIGITS = 6;

function App() {
  //initialise an empty array with blank value
  const[inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const refArr = useRef([]);

  useEffect(()=>{
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if(isNaN(value)){
      return;
    }
    const newValue = value.trim();
    const dummyArr = [...inputArr];
    dummyArr[index] = newValue;
    setInputArr(dummyArr);
    //go to next input only if value is not present
    newValue && refArr.current[index + 1]?.focus();
  }

  const handleOnKeyDown = (e, index) => {
    //e holds the key name
    //the condition !e.target.value is needed since this fn must focus to previous input box only if current data is empty
    //if not empty, no need to focus as this onKeyDown triggers before the input value changes.
    //so before delete happens, it is executed and shifts focus to previous and previous gets deleted
    if(!e.target.value && e.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <div className='main'>
      <h1 className='header'>
        OTP Input
      </h1>
      <div className='otp-secn'>
        {
          inputArr.map((item, i) => 
            <input key={i} 
                  className='digit' 
                  value={inputArr[i]} 
                  ref = {(input) => (refArr.current[i] = input)}
                  onKeyDown = {(e)=>handleOnKeyDown(e, i)}
                  onChange={(e)=>handleChange(e.target.value, i)}/>)
        }
      </div>
    </div>
  )
}

export default App
