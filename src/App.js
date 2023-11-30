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
        const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList'));
        // added savedTodoList to setTimeout above and todoList: below. The hw does not say to do this but it worked this way.Why?

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
      <h1>Anime to watch List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (<TodoList
        todoList={todoList}
        onRemoveTodo={removeTodo} />
      )}
    </>
  );
};

export default App;


