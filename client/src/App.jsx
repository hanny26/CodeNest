import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Logout from './Pages/Logout';

function App() {
 
  return (
    <>
     <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error/>} />
    
    </Routes>
    
      <Footer />
     </BrowserRouter>

    </>
  )
}

export default App
