import React from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";


const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;


