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

  //this use effect has data as a dependency since when initially created, the observer is observing the null bottomMostDiv, since data is not fetched and 
  //even if we had the same div for case when data.length = 0, still it would refer to the div in case when data is empty.
  //Therefore, we need to add data as a dependency
  //basically, useref wala variable got updated. But, the closure in the useeffect still has access to the previous useref wala variable so we need data as a 
  //dependency.
  /************CHECK THE SOLUTION MENTIONED BELOW TOO************/
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, intersectionObserverOptions);
    const currentRef = bottomMostDiv.current;
    if (currentRef) {
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
      <div ref={bottomMostDiv} style={{ height: "50px"}}></div>
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

export default App;


//Another solution using usecallback -> yet to test
// import { useState, useCallback } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const maxPages = 10;

//   const callBackFunction = (entries) => {
//     if (entries[0].isIntersecting) {
//       console.log('Bottom div is visible now');
//       if (page < maxPages) setPage((p) => p + 1);
//     }
//   };

//   const observerCallbackRef = useCallback((node) => {
//     if (!node) return; // null during cleanup

//     const observer = new IntersectionObserver(callBackFunction, {
//       threshold: 0.1,
//     });

//     observer.observe(node);

//     return () => {
//       observer.disconnect(); // Clean up observer when node unmounts
//     };
//   }, [callBackFunction]); // Only depends on the stable callback

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
//       );
//       const json = await res.json();
//       setData((prev) => [...prev, ...json]);
//     };

//     fetchData();
//   }, [page]);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h4>{item.title}</h4>
//           <p>{item.body}</p>
//         </div>
//       ))}
//       {page < maxPages ? (
//         <div
//           ref={observerCallbackRef}
//           style={{ height: '60px', background: '#eee' }}
//         >
//           Loading...
//         </div>
//       ) : (
//         <div style={{ height: '60px' }}>End of list</div>
//       )}
//     </div>
//   );
// }
