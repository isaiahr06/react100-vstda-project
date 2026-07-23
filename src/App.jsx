import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css'
import hovercheck from './assets/hovercheck.gif'
import { hover } from '@testing-library/user-event/dist/cjs/convenience/hover.js'

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
    <header className="header">

      <img 
  src={hovercheck}
  alt="hovercheck"
  className="header-animation"
/>
      <h1>Very Simple Todo App</h1>
      <h4>Track all of the things.</h4>
    </header>


    <main className="app-container">

      <section className="todo-form-card">
        <TodoForm addTodo={addTodo}/>
      </section>


      <section className="todo-list-card">
        <TodoList 
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          completeTodo={completeTodo}
        />
      </section>

    </main>

    <footer>
  <a href="https://lordicon.com/">
    Icons by Lordicon.com
  </a>
</footer>
  </>
  )
}

export default App
