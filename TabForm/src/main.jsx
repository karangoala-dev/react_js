import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TabForm from './components/TabForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabForm />
  </StrictMode>,
)
