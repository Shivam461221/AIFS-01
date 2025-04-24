import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/parent'
import Parent2 from './components/Parent-2'

function App() {
  const [count, setCount] = useState(0)

  const increment =()=>{
    setCount(count+1);
  }

  const decrement =()=>{
    setCount(count-1);
  }

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={()=>increment()} >Increment</button>
      <button onClick={()=>decrement()}>Decrement</button>
      <Parent count={count} />
      <Parent2/>
    </>
  )
}

export default App
