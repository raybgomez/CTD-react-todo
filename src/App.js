import { useState, useEffect } from 'react';

import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";


const App = () => {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAsyncTodos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = {
          data: {
            todoList: []
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
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;


