import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1);
  const bottomMostDiv = useRef(null);
  const maxPages = 10;

  const callBackFunction = (entries) => {
    if (entries[0].isIntersecting && data.length != 0) {
      console.log("Bottom div is visible now.");
      if(page < 10){
        setPage(page + 1);
      }
    }
  }
  const intersectionObserverOptions = {
    threshold: 0.1
  }

  useEffect(() => {
    let apiCall = async function () {
      let apiCallPromise = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      let response = await apiCallPromise.json();
      setData((prevData)=>[...prevData, ...response]);
    }

    apiCall();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, intersectionObserverOptions);
    if (bottomMostDiv.current != null) {
      observer.observe(bottomMostDiv.current);
    }

    return (() => {
      if (bottomMostDiv.current) {
        observer.unobserve(bottomMostDiv.current);
      }
    });
  }, [data]);

  if (data.length == 0) {
    return (
    <div className='main'>
      <h2>Loading...</h2>
      <div ref={bottomMostDiv} style={{ height: "50px", background: "lightgray" }}>
        Loading...
      </div>
    </div>);
  }
  return (<div className='main'>
    <h1 className='h'>Infinite Scroll component</h1>
    <div className='main'>
      {data.map((item) => {
        return (
          <div className='card-main'>
            <div>
              {item.title}
            </div>
            <br />
            <div>
              {item.body}
            </div>
          </div>
        )
      })}
      <div ref={bottomMostDiv} style={{ height: "50px"}}>
        {
          page < maxPages ? <div>Loading...</div> : <div>End of page</div>
        }
      </div>
    </div>
  </div>
  );
}

export default App
