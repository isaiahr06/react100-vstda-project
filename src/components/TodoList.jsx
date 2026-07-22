import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo, completeTodo }) {
  return (
    <>
      {todos.map(todo => (
        <TodoItem 
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        /> 
      ))}
    </>
  );
}

export default TodoList;
