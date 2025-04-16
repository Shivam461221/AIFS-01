import Child from "./Child";


export default function StudentList(props){

    return<>
        <table className='table table-striped' >
        <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Brnach</th>
              <th>Mobile</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            props.studentList.map((student, index)=> <tr key={student.id} >
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.mobile}</td>
              <td><button onClick={()=>props.removeStudent(student.id)} className='btn btn-danger'>Remove</button></td>
            </tr> )
          }
        </tbody>
      </table>

      <Child studentList={props.studentList} />
    </>
}