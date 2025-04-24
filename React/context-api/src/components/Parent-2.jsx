import { useContext } from "react"
import { CountContext } from "../Context/CountContext"

export default function Parent2(){

    const {user, setUser} = useContext(CountContext);

    return <>
    <h1>Parent 2 {user}</h1>
    </>
}