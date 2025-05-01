/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import json from '../data.json';
import List from './List';

function App() {
  const[data, setData] = useState(json);
  const addFolder = (parentId) => {
    //this fn traverses the folder tree and adds a folder inside parentId
    console.log("Adding folder")
  }

  return (
    <div className='main'>
      <h1 className='title'>File Explorer</h1>
      <List list={data} addFolder={addFolder}/>
    </div>
  )
}

export default App;
