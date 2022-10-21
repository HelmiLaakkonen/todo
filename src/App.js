import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL ='http://localhost:3002'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTasks(response.data)
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])

  return (
    <div>
      <h3>My tasks</h3>
      <ol>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;