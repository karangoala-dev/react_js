import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1);
  const bottomMostDiv = useRef(null);

  const callBackFunction = (entries) => {
    if (entries[0].isIntersecting) {
      console.log("Bottom div is visible now.");
    }
  }
  const intersectionObserverOptions = {
    threshold: 0.1
  }

  useEffect(() => {
    let apiCall = async function () {
      let apiCallPromise = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      let response = await apiCallPromise.json();
      setData(response);
    }

    apiCall();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, intersectionObserverOptions);
    if (bottomMostDiv.current != null) {
      observer.observe(bottomMostDiv.current);
    }

    return(()=>{
      if(bottomMostDiv.current){
        observer.unobserve(bottomMostDiv.current);
      }
    });
  }, []);

  if (data.length == 0) {
    return (<div className='main'><h2>Loading...</h2></div>);
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
      <div ref={bottomMostDiv}>
        Loading...
      </div>
    </div>
  </div>
  );
}

export default App
