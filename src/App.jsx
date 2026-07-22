import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(newTodo){
    setTodos([...todos,newTodo])
  }

  function deleteTodo(id){
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }

  function updateTodo(id, updatedTodo){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
        return {
          ...todo,
          description: updatedTodo.description,
          priority: updatedTodo.priority
          }
        }
        return todo;
      })
    )
  }

  function completeTodo(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }
  
  return (
    <>
      <h1>Very Simple Todo App</h1>
      <h4>Track all of the things.</h4>

      <TodoForm addTodo={addTodo}/>

      <TodoList 
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
      />
    </>
  )
}

export default App
