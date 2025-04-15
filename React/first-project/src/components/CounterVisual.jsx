import { useState } from 'react';
function CounterWithProgress() {
    const [count, setCount] = useState(0);
    const min = 0;
    const max = 10;
    const progress = (count/max)*100;
    const increment =()=>{
        if(count<max){
            setCount(count+1);
        }
    }
    const decrement = () =>{
        if(count>min){
            setCount(count-1);
        }
    }
    const reset =()=> setCount(0);
    return(
        <>
        <div>
            <h1>Counter with progress bar</h1>
            <p>{count}</p>
            <button onClick={increment} disabled={count===max} >Increment</button>
            <button onClick={decrement} disabled={count===min} >Decrement</button>
            <button onClick={reset}>Reset</button>
            <div style={{
                height:'20px',
                backgroundColor:'white',
                width:'600px',
                marginTop:'20px',
                borderRadius:'20px'
            }} >
                <div style={{
                    height:'100%',
                    width: `${progress}%`,
                    backgroundColor:'red',
                    borderRadius:'20px'
               }}>
                </div>
            </div>
        </div>
        </>
    )
}
export default CounterWithProgress;
