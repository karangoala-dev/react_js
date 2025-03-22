import { useState } from 'react'
import './App.css'
import useScreenSize from './hooks/useScreenSize'

function App() {

  const [width, height] = useScreenSize();

  return (
    <>
      <h1>Width : {width}</h1>
      <h1>Height : {height}</h1>
    </>
  )
}

export default App
