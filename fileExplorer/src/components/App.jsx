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
    // this is a fn which is called recursively
    const updateTree = (list) => {
      // this returns the list after adding the new folder to the children of parent if found
      return list.map((node)=>{
        if(node.id == parentId){
          return {
            ...node,
            children: [...node.children, {
              id: Date.now().toString(),
              name: name,
              isFolder: true,
              children: []
            }]
          }
        }
        // if parent is not found, then call same fn on it's children if it exists
        if(node.children){
          return {...node, children: updateTree(node.children)};
        }
      })
    }

    setData((prev)=>updateTree(prev));
  }

  //this fn deletes the file node from data tree
  const deleteFolder = (id) => {

    //this fn is called recursively
    const updateTree = (list) => {

      //first filter out all items where id = given id
      //then again run a .map on each filtered item for recursively calling the updateTree fn on it's children
      return list.filter((item)=>item.id != id).map((item)=>{
        if(item.children){
          return {
            ...item,
            children: updateTree(item.children)
          }
        }
      })
    }

    setData((prev) => updateTree(prev));
  }

  return (
    <div className='main'>
      <h1 className='title'>File Explorer</h1>
      <List list={data} addFolder={addFolder} deleteFolder={deleteFolder}/>
    </div>
  )
}

export default App;
