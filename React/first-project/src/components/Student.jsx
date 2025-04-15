import { useState } from 'react';
import studentData from './Data.js' ;
export default function Student(){
    const [studentList, setStudentList] = useState(studentData);

    const removeStudent = (id) =>{
        let index = studentList.findIndex(student=>student.id===id);
        studentList.splice(index, 1);
        setStudentList([...studentList]);
    }

    return <>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <td>Name</td>
                    <td>Branch</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {studentList.map((student, index)=><tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.Branch}</td>
                    <td><button onClick={()=>removeStudent(student.id)}> remove</button></td>
                </tr>)} 
            </tbody>
        </table>
    </div>
    </>
}