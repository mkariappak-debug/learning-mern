import { useState } from 'react'

function Todo() {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTask = () => {

    setTodos([...todos, task])
    setTask('')

  }

  return (

    <div>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      {
        todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))
      }

    </div>

  )
}

export default Todo