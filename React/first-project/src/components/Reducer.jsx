import { useReducer } from "react"

export default function Reducer() {
    const [state, dispatch] = useReducer(reduce, { count: 0 });

    function reduce(state, action) {
        switch (action.type) {
            case 'increment': 
            return { count: state.count + 1 };
            case 'decrement': 
            return { count: state.count - 1 };
            case 'reset': 
            return { count: 0 };
            default:
            return state
        }
    }
    return (
        <>
        <h2>Counr : {state.count}</h2>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}