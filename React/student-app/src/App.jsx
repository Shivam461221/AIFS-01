import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import studentData from './StudentData.js'
import StudentList from './components/StudentList.jsx'

function App() {
  const [studentList, setStudentList] = useState(studentData);
  const [branch, setStudentBranch] = useState(['CS', 'IT', 'EC', 'Mechanical'])

  const idRef = useRef(null);
  const nameRef = useRef(null);
  const branchRef = useRef(null);
  const mobileRef = useRef(null);


  const removeStudent =(id)=>{
    let index = studentList.findIndex(student=>student.id===id);
    studentList.splice(index, 1);
    setStudentList([...studentList]);
  }

  // const addStudent=()=>{
  //   let id = document.getElementById('studentId').value;
  //   let name = document.getElementById('studentName').value;
  //   let branch = document.getElementById('studentBranch').value;
  //   let mobile = document.getElementById('studentMobile').value;
    
  //   let newStudent = {id, name, branch, mobile};
  //   setStudentList([...studentList, newStudent]);

  // }

  const addStudent=()=>{
    let id = idRef.current.value;
    let name = nameRef.current.value;
    let branch= branchRef.current.value;
    let mobile = mobileRef.current.value;
    
    let newStudent = {id, name, branch, mobile};
    setStudentList([...studentList, newStudent]);

  }

  return (
    <>
      <div className="container-fluid bg-primary py-2">
        <h1 className='text-center'>Student App</h1>
      </div>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Student ID</label>
              <input ref={idRef} id='studentId' type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
              <label htmlFor="">Student Name</label>
              <input ref={nameRef} id='studentName' type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Student Branch</label>
              <select ref={branchRef} id='studentBranch' className='form-control'>
                <option value="">Select</option>
                {branch.map((branch, index)=><option key={index} >
                  {branch}
                </option>)}
              </select>
            </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
              <label htmlFor="">Student Mobile</label>
              <input ref={mobileRef} id='studentMobile' type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row my-2 ">
          <div className="col-md-12">
            <button onClick={()=>addStudent()} className='btn btn-secondary'>Add</button>
          </div>
        </div>
      </div>

      <StudentList studentList={studentList} removeStudent={removeStudent} />

    </>
  )
}

export default App
