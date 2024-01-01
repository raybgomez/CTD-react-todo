import { useState, useEffect } from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAsyncTodos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));

        const result = {
          data: {
            todoList: savedTodoList || []
          }
        };
        resolve(result)
      }, 2000)
    });
  };

  useEffect(() => {
    getAsyncTodos().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, [])

  useEffect(() => {
    const stringifyTodoList = JSON.stringify(todoList);
    if (!isLoading) {
      localStorage.setItem('savedTodoList', stringifyTodoList)
    }
  }, [todoList, isLoading]);
  const removeTodo = (id) => {
    const newTodos = todoList.filter(
      todo => id !== todo.id
    );
    setTodoList(newTodos)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Anime to watch List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onRemoveTodo={removeTodo} />
              )}
            </>
          } />
          <Route path="/new" element={
            <>
              <h1>New Todo List</h1>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


