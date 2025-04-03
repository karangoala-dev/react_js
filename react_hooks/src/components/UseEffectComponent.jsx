import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import './UseEffectComponent.css';

const UseEffectComponent = () => {
  const[data, setData] = useState([]);
  const[page, setPage] = useState(1);
  const[isBottom, setIsBottom] = useState(false);
  //This variable refers to the bottom wala invisible div
  const bottomRef = useRef(null);
  useEffect(()=>{
    const callApi = async ()=>{
      //Here both fetch and response.json return promises, so there are 2 promises here which need handling
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15&_page=${page}`);
      const jsonData = await response.json();
      setData((prevData)=>[...prevData, ...jsonData]);
      //OR USE
      // await fetch('https://jsonplaceholder.typicode.com/posts').then(async (res)=>{
      //   const response = await res.json();
      //   setData(response);
      // })
    }
    callApi();
  }, [page]);

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      //If bottom div is visible, we reached bottom
      if(entries[0].isIntersecting == true){
        setIsBottom(true);
        setPage(page + 1);
      }
    }, {threshold: 1.0});

    if(bottomRef.current != null){
      observer.observe(bottomRef.current);
    }

    return ()=>{
      observer.disconnect();
    }
  }, []);

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
      <div ref={bottomRef} >
      </div>
    </div>
  )
}

export default UseEffectComponent;