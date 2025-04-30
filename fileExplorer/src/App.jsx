import { useState } from 'react'
import './App.css'
import json from './data.json';
import List from './List';

function App() {
  const[data, setData] = useState(json);

  return (
    <div className='main'>
      <h1 className='header'>File Explorer</h1>
      <List list={data}/>
    </div>
  )
}

export default App;
