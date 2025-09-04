import { useRef, useState } from 'react'
import Row from './components/Row'
import './App.css'


function App() {
  const tableRef = useRef(null)
  const [tasks, setTasks] = useState([])
  
  const handleClick = () => {
    let tasksCount = tasks.length + 1
    if (tableRef.current.value) {
      setTasks([...tasks, {id: tasksCount, name: tableRef.current.value, stat: "In Progress ..."}])
       tableRef.current.value = ""
    } 
  }

  const finish = () => {
  
  }


  return (
    <div className="container">
      <h1>To Do App</h1>           
      
      <div className="input-elements">
        <input type="text" ref={tableRef} />
        <button onClick={handleClick}>Add Task</button>
		  </div>
      
      <div className="tasks-table">
        <div className="row">
          <div className="column">No.</div>
          <div className="column">Task</div>
          <div className="column">Status</div>
          <div className="column">Actions</div>
        </div>
        {         
          tasks.map((element) => {
            return (
              <div className="row">
                <div className="column">{element.id}</div>
                <div className="column">{element.name}</div>
                <div className="column">{element.stat}</div>
                <div className="column-btns">
                  <button>Delete</button>
                  <button onClick={finish}>Finished</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
