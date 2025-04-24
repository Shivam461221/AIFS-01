import GrandChild from "./grandchild";

export default function Child(props){

    return <>
    <h1>Child {props.count} </h1>

    <GrandChild count={props.count} />
    </>
}