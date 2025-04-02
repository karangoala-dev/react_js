import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './UseEffectComponent.css';

const UseEffectComponent = () => {
  const[data, setData] = useState([]);
  useEffect(()=>{
    const callApi = async ()=>{
      //Here both fetch and response.json return promises, so there are 2 promises here which need handling
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
      //OR USE
      // await fetch('https://jsonplaceholder.typicode.com/posts').then(async (res)=>{
      //   const response = await res.json();
      //   setData(response);
      // })
    }
    callApi();
  }, [])

  return (
    <div className='main'>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="body">
        {data.length == 0 ? <span>Loading...</span> : data.map((item)=>{
          return (
            <div className='list-item'>
            <div>Title: {item.title}</div>
            <div>Body: {item.body}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UseEffectComponent;