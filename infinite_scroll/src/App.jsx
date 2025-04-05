import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    let apiCall = async function () {
      let apiCallPromise = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=100&_page=${page}`);
      let response = await apiCallPromise.json();
      setData(response);
    }

    apiCall();
  }, []);

  if (data.length == 0) {
    return (<><h2>Loading...</h2></>);
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
    </div>
  </div>
  );
}

export default App
