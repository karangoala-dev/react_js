import React from 'react'
import { useState, useRef } from 'react';

const UseRefComponent = () => {
    const [count, setCount] = useState(0);
    //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    const countRef = useRef(0);
    const handleStateClick = () => {
        setCount(count + 1);
    }

    const handleRefClick = () => {
        countRef.current = countRef.current + 1;
    }

    console.log("Re-rendering");
    return (
        <div>
            <h2>Changing useref value wont re-render the component but changing usestate value will re-render component</h2>
            <br></br>
            <h5>Count state variable : {count}</h5>
            <button onClick={handleStateClick}>Increment state</button>
            <h2>useRef value wont be visible on button click but it is updated, it is visible if u click the useState button and it causes a re-render</h2>
            <h5>Count ref : {countRef.current}</h5>
            <button onClick={handleRefClick}>Increment ref</button>
        </div>
    )
}

export default UseRefComponent;