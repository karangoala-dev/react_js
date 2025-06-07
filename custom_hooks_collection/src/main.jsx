import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseCounterComponent from './components/UseCounterComponent.jsx';
import UseFetchComponent from './components/UseFetchComponent.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/usecounter' element={<UseCounterComponent />} />
      <Route path='/usefetch' element={<UseFetchComponent />} />
    </Routes>
  </BrowserRouter>
)
