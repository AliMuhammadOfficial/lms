
import './App.css';
import { useState } from 'react'
function App() {
  return (
    <div className="app">
      <Student />
    </div>
  );
}

function Student() {
  const [students, setStudents] = useState([
    {id: 0, name: 'Majid', course: "PHP"},
    {id: 1, name: 'Munesh', course: 'MERN'},
    {id: 2, name: 'Ali', course: 'Artificial Intelligence'}
  ])

  const [trash, setTrash] = useState([])
 
    
    function removeStudent(std) {
      console.log("RemoveStudent Function : ", std.target.value)
      let newStudents = [...students]
      let newTrash = [...trash]

      let removed = newStudents.splice(std.target.value, 1)
    //  console.log(removed[0])
      newTrash.push(removed[0])
      console.log(newTrash)
      setStudents(newStudents)
      setTrash(newTrash)
      console.log(trash)
    }

    function undo() {
      let newStudents = [...students]
      let newTrash = [...trash]

      let recovered = newTrash.pop()
      newStudents.push(recovered)
      setStudents(newStudents)
      setTrash([])
      console.log(trash)
    }



  return (
    <div>
      <table style={{width: '80%'}} border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Remove Student</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({id, name, course}, index) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{course}</td>
              {console.log(index)}
              <td><button onClick={removeStudent} value={index}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
          {trash.map(({id, name, course}, index) => (
            <li key={index}>
              <button onClick={undo}>Removed {name} (Undo)</button>
            </li>
          
          ))}
      </ul>
    </div>
  )
}

export default App;
