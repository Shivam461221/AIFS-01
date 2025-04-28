import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import CounterWithProgress from './components/CounterVisual'
import ShowHide from './components/ShowHide'
import SearchUser from './components/SearchUser'
import Student from './components/Student'
import Reducer from './components/Reducer'
import TodoApp from './components/TodoApp'

function App() {
  //const [count, setCount] = useState(0)
// JSX - Javascript XML (syntax extention)
//<> </>  React fragement 
// fragement or div tag 
  return (
    <>       
      {/* <Counter/> */}
      {/* <CounterWithProgress/> */}
      {/* <ShowHide/> */}
      {/* <SearchUser/> */}
      {/* <Student/> */}
      {/* <Reducer/> */}
      <TodoApp/>
    </>
  )
}

export default App
