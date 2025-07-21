import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        placeholder="Enter a new Todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button 
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
