import { useContext } from "react";
import Child from "./child";
import { CountContext } from "../Context/CountContext";

export default function Parent(props){
const {user} = useContext(CountContext);
    return <>
    <h1>Parent {props.count} </h1>
    <p>{user}</p>
    <Child count={props.count} />
    </>
}