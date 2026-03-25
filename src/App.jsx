import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './assets/pages/Landing'
import ContactUs from './assets/pages/ContactUs'
import Gallery from './/assets/pages/Gallery'
import AboutUs from './assets/pages/AboutUs'
import Event from './assets/pages/Event'
import Classes from './assets/pages/Classes'



function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/events" element={<Event />} />
         <Route path="/classes" element={<Classes />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
