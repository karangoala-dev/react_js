import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import UserContext from './context/UserContext';
import { useState } from 'react';

function App() {
  const[loggedInUser, setLoggedInUser] = useState("Default User");

  return (
    <div>
      <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Header/>
        <Outlet/>
      </UserContext.Provider>
    </div>
  )
}

export default App
