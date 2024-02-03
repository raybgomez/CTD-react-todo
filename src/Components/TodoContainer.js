import { useState, useEffect } from 'react';
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import propTypes from 'prop-types';

const TodoContainer = () => {
    const addTodo = (newTodo) => {
        postData(newTodo)
    }
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            }
        };


        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} `);
            };
            const data = await response.json();

            const todos = data.records.map((todo) => ({
                title: todo.fields.title,
                id: todo.id,
            }));

            setTodoList(todos);
            setIsLoading(false);

        } catch (error) {
            console.error(error)


        };
    };

    const postData = async (newTodo) => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        const todoData = {
            fields: newTodo
        }
        console.log(todoData)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            },
            body: JSON.stringify(todoData)
        };


        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} `);
            };
            await response.json();
            fetchData()

        } catch (error) {
            console.error(error)

        };
    }


    const deleteData = async (id) => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`
        const newTodos = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodos);

        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            },
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} `);
            };
            await response.json();
            fetchData()

        } catch (error) {
            console.error(error)

        };
    };

    useEffect(() => {
        fetchData()

    }, []);


    useEffect(() => {
        const stringifyTodoList = JSON.stringify(todoList);
        if (!isLoading) {
            localStorage.setItem('savedTodoList', stringifyTodoList)
        }
    }, [todoList, isLoading]);

    const removeTodo = (id) => {
        deleteData(id)
    }
    return (
        (<div className={styles.titleInputListContainer}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <div className={styles.titleInputContainer}>
                                <h1 className={styles.title}>Shopping List</h1>
                                <AddTodoForm onAddTodo={addTodo} />
                            </div>
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
        </div>)
    );
};

TodoContainer.propTypes = {
    newTodo: propTypes.func.isRequired,
    id: propTypes.func.isRequired,
}

export default TodoContainer;