import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GridOverlay from './assets/layout/GridOverlay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <GridOverlay /> */}
  </StrictMode>,
)
