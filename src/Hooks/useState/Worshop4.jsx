import React, { useState } from 'react'

export default function Worshop4() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  }

  const addNewTask = (newTask) => {
    if(newTask.trim() === "") {
      alert("Task is required");
      return;
    }
    setTasks([...tasks, newTask]);
    setTask("");
  }

  return (
    <>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={() => addNewTask(task)}>Add Task</button>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}
