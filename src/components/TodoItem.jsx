import { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo, completeTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(todo.description)
  const [editPriority, setEditPriority] = useState(todo.priority)

  function handleSave(e){
    e.preventDefault();
    const updatedTodo = {
    description: editDescription,
    priority: editPriority
  }
  updateTodo(todo.id, updatedTodo);
  setIsEditing(false);
  }

  if (isEditing) {
  return (
    <form onSubmit={handleSave}>
      <textarea
        data-testid="update-todo-text"
        value={editDescription}
        onChange={(e) => setEditDescription(e.target.value)}
      />

      <select
        data-testid="update-todo-priority"
        value={editPriority}
        onChange={(e) => setEditPriority(e.target.value)}
      >
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>

      <button data-testid="update-todo" type="submit">
        Save
      </button>
    </form>
  );
}
  return (
    <>
      <h3>{todo.description}</h3>
      <p>{todo.priority}</p>

      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />

      <a onClick={() => setIsEditing(true)}>Edit</a>

      <a onClick={() => deleteTodo(todo.id)}>Delete</a>
    </>
  );
}

export default TodoItem;
