import React from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = React.useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
    return savedTodoList || [];
  });

  React.useEffect(() => {
    const stringifyTodoList = JSON.stringify(todoList);
    localStorage.setItem('savedTodoList', stringifyTodoList);
  }, [todoList]);

  return [todoList, setTodoList];
}

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState()
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }





  return (
    <>
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default App;


