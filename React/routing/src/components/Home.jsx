import { useNavigate } from "react-router-dom"
import './Home.css';

export default function Home(){
    const navigate = useNavigate();
    const navigateToAbout=()=>{
        navigate('/about')
    }

    return(
        <>
        <div style={{"height":"600px", "backgroundColor":"lightblue"}} className="container my-5">
        <h1>This is Home component</h1>
        <button onClick={()=>navigateToAbout()} className="btn btn-primary">About</button>
        </div>
        </>
    )
}