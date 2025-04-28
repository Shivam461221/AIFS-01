import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 }
    case 'multiply':
      return { ...state, count: state.count*2 }
      case 'chnageName' :
        return {...state, name: action.payload};
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // }
  //useState, useEffect, useNavigate, useContext, useReducer

  const [state, dispatch] = useReducer(reducer, { count: 0, name:'shivam' });
  return (
    <>
      <p>{state.count} and {state.name}</p>
      <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })} >Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'multiply' })} >Multiply</button>
      <button onClick={() => dispatch({ type: 'chnageName', payload: 'sanket' })} >ChangeName</button>
    </>
  )
}

export default App
