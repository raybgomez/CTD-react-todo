import React from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";

const App = () => {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;


