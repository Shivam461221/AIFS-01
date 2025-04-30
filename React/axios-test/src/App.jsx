
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Product'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
