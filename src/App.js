import React from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";

const App = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Anime to watch List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
