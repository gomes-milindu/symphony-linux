import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './assets/pages/Landing'
import ContactUs from './assets/pages/ContactUs'
import Gallery from './/assets/pages/Gallery'



function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
