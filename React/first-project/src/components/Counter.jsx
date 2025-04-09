import { useState } from "react";

function Counter(){
const [count, setCount] = useState(0);

//{} - binding/data binding
    return (
        <div>
            <p>Count {count} </p>
            <button onClick={()=>setCount(count+1)} >increment</button>
            <button onClick={()=>setCount(count-1)} >decrement</button>
        </div>
    )
}

export default Counter;