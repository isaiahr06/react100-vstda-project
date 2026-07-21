import { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(newTodo){
    setTodos([...todos,newTodo])
  }
  
  return (
    <>
      <h1>Very Simple Todo App</h1>
      <h4>Track all of the things.</h4>

      <TodoForm addTodo={addTodo}/>

      <TodoList />
    </>
  )
}

export default App
