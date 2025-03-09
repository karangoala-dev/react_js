import {use, useCallback, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count, setCount] = useState(0);

  //3-> This is a factory method which returns debounced version of any function
  /*******************/
  //How does clearTimeout(timerId) get the reference to the previous timerId?
  //When you call a debounced function, it maintains its own closure over timerId.
  // The timerId variable is declared in the outer function (debounced).
  // Every time the returned function is executed, it references the same timerId stored in memory.
  // This means that when clearTimeout(timerId) is called, it clears the previous timer before setting a new one.
  /*******************/
  const debounced = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  }

  //2->This function will execute only when 1 second has passed since the previous keystroke and will print the latest state value only.
  const debouncedButtonClick = useCallback(debounced((count) => {
    console.log("Button clicked " + count + " times.");
  }, 1000), []);

  //1->This function will run the number of times button is clicked.
  const handleClick = () => {
    setCount(count + 1);
    debouncedButtonClick(count);
  }
  return (
    <>
        <button onClick={() => handleClick()}>Debounced Button</button>
    </>
  )
}

export default App;
