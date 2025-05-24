import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Book from './components/Book'
import About from './components/About'
import Treatment from './components/Treatment'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Doctors from './components/Doctors'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DoctorsList from './components/DoctorsList'
import Protected from './components/Protected'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/book"} element={<Book />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/treatment"} element={<Treatment />} />
        <Route path={"/doctors"} element={<Doctors />} />
        <Route path={"/testimonial"} element={<Testimonial />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>} />
        <Route path='/doctorsList' element={<DoctorsList/>} />
      </Routes>
      <Footer />




    </>
  )
}

export default App
