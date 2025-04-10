import { Component, useEffect, useState} from "react";

function Counter(){
const [count, setCount] = useState(5);
const [name, setName] = useState('Shivam');

useEffect(()=>{
    console.log('Run once');
    //will run when components renders  ]
},[]);

useEffect(()=>{
    //will run everytime
    console.log('Run everytime')
})

useEffect(()=>{
    //runs when count(dependency) will update
    console.log('Run when count update')
},[count])

const increment =()=>{
    setCount(count+1);
    console.log(count);
}
//state and side effect manage - hooks are the special functions which is used to efficeintly use
//react features 
//  React - 16.8V
// class component
//{} - binding/data binding
    return (
        <div>
            <p>Count {count} {name}</p>
            <button onClick={increment} >increment</button>
            <button onClick={()=>setCount(count-1)} >decrement</button>
            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}

export default Counter;

// class Counter extends Component{
//     constructor(){

//     }
// }

//whenever state is updated component will re-render