/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import json from '../data.json';
import List from './List';

function App() {
  const[data, setData] = useState(json);
  //this fn traverses the folder tree and adds a folder inside parentId
  const addFolder = (parentId) => {
    const name = prompt('Enter folder name ');
    //this is a fn which is called recursively
    const updateTree = (list) => {
      return list.map((node)=>{
        if(node.id == parentId){
          return {
            ...node,
            children: [...node.children, {
              id: Date.now.toString(),
              name: name,
              isFolder: true,
              children: []
            }]
          }
        }
        if(node.children){
          return {...node, children: updateTree(node.children)};
        }
      })
    }

    setData((prev)=>updateTree(prev));
  }

  const deleteFolder = (id) => {
    
  }

  return (
    <div className='main'>
      <h1 className='title'>File Explorer</h1>
      <List list={data} addFolder={addFolder} deleteFolder={deleteFolder}/>
    </div>
  )
}

export default App;
