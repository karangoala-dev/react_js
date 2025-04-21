import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [prefix, setPrefix] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchApi = async()=>{
    let response = await fetch(`https://dummyjson.com/recipes/search?q=${prefix}`);
    let data = await response.json();
    setResults(data.recipes);
    setCache((prevCache) => ({...prevCache, [prefix]: data.recipes}));
  }

  useEffect(()=>{
    console.log("CACHE -> " + JSON.stringify(cache));
  }, [cache]);

  //Debouncing
  //here, if an API call is made initially, then a timer is set for a delay 
  //if the state variable(prefix) changes then fn will be called with same delay.
  //now if delay time has passed then the latest setTimeout fn gets called(since so far we have cleared timeout for any intermittent settimeout calls)
  useEffect(()=>{
    const timerId = setTimeout(fetchApi, 300);
    
    //this return statement in useEffect is run right before the component unmounts
    return ()=>{
      clearTimeout(timerId);
    }
  }, [prefix]);

  return (
    <div className='main'>
      <h1>Autocomplete Text</h1>
      <input className='search' type='text' value={prefix} onChange={(e)=>setPrefix(e.target.value)} onBlur={()=>setShowResults(false)} onFocus={()=>setShowResults(true)}/>
      {prefix != "" && showResults && 
      <div className='results-container'>
        {results.length != 0 && results.map((i, ind)=>{
          return(
            <span className='result' key={ind}>
              {i.name}
            </span>
          );
        })}
      </div>}
    </div>
  )
}

export default App
