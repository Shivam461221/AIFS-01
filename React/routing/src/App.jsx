import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  
  return (
    <>
     <div className='container-fluid bg-secondary'>
      <div className="row p-2">
        <div className="col-md-2">
          <h1>CloudBlitz</h1>
        </div>
        <div className="col-md-2">
          <h3><Link className='text-dark' to={'/home'} >Home</Link></h3>
        </div>
        <div className="col-md-2">
          <h3><Link className='text-dark' to={'/about'}>About</Link></h3>
          </div>
        <div className="col-md-2"><h3><Link className='text-dark' to={'/contact'}>Contact</Link></h3></div>
        <div className="col-md-2">
          <input type="search" className='form-control' />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
     </div>

     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
     </Routes>
      
      <div className='text-center bg-danger'><h2>All right reserved</h2></div>
    </>
  )
}

export default App
