import React from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";


const App = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
    return savedTodoList || [];
  });;
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }


  React.useEffect(() => {
    const stringifyTodoList = JSON.stringify(todoList);
    localStorage.setItem('savedTodoList', stringifyTodoList);
  }, [todoList]);

  // React.useEffect(() => {
  //   const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
  //   if (savedTodoList) {
  //     setTodoList(savedTodoList);
  //   }
  // }, []);

  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;


