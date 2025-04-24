import { useContext } from "react"
import { CountContext } from "../Context/CountContext"

export default function GrandChild(props){
const {user, setUser} = useContext(CountContext);
    return <>
    <h1>Grand child {props.count} </h1>

    <h2>{user}</h2>

    <button onClick={()=>setUser('Sanket')}>Change name</button>
    </>
}