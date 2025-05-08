import { useEffect, useState } from "react"
import axios from "axios";


export default function DoctorsList(){
    const [doctors, setDoctors] = useState([]);

    const token = localStorage.getItem('token');

    const getDoctors = async ()=>{
        try{
            let response = await axios.get('http://localhost:8000/api/doctors/getAll', {
                headers: {
                    'Authorization' : `Bearer ${token}` }
            })
            if(response){
                setDoctors(response.data);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getDoctors();
    },[]);

    return (
        <>
            <table className="table table-striped m-5">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => <tr key={index}>
                            <td>{doctor._id}</td>
                            <td>{doctor.firstName}</td>
                            <td>{doctor.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}