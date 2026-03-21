import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './assets/pages/Landing'
import ContactUs from './assets/pages/ContactUs'



function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        <Route path="/contactus" element={<ContactUs />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
