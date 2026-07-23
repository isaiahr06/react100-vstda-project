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
    <form className="edit-form" onSubmit={handleSave}>
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
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>

      <button data-testid="update-todo" type="submit">
        Save
      </button>
    </form>
  );
}
  return (
    <div 
  data-testid="todo-item" 
  className={`
    todo-item
    ${
      todo.priority === "1"
        ? "priority-high"
        : todo.priority === "2"
        ? "priority-medium"
        : "priority-low"
    }
    ${todo.completed ? "completed" : ""}
  `}
>

      <h3>{todo.description}</h3>
      
      <p>{todo.priority}</p>

      <input 
        data-testid="complete-todo"
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />

      <a data-testid="edit-todo" onClick={() => setIsEditing(true)}>Edit</a>

      <a data-testid="delete-todo" onClick={() => deleteTodo(todo.id)}>Delete</a>
    </div>
  );
}

export default TodoItem;
