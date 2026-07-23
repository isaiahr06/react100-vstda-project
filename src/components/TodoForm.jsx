import { useState } from "react";
function TodoForm({ addTodo }) {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1')

  function handleSubmit(e){
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      description,
      priority,
      completed: false
    };

    addTodo(newTodo);
  }


  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        data-testid="create-todo-text" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select 
        data-testid="create-todo-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>

      <button data-testid="create-todo" type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
