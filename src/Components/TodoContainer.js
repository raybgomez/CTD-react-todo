import { useState, useEffect } from 'react';
import TodoList from "./TodoList.js";
import AddTodoForm from "./AddTodoForm.js";
import styles from '../App.module.css';
import propTypes from 'prop-types';

const TodoContainer = () => {
    const addTodo = (newTodo) => {
        postData(newTodo)
    }
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('title');

    const toggleSortOrder = (field) => {
        if (sortBy === field) {
            const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            setSortOrder(newSortOrder);
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
        fetchData(sortBy, sortOrder);
    };

    const fetchData = async (sortField = 'title', order = 'asc') => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?sort[0][field]=${sortField}&sort[0][direction]=${order}&view=Grid%20view`;
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
            console.log(data);

            // data.records.sort((objectA, objectB) => {
            //     if (objectA.fields.title < objectB.fields.title) return 1;
            //     if (objectA.fields.title > objectB.fields.title) return -1;
            //     return 0;
            // });

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

    useEffect(() => {
        fetchData(sortBy, sortOrder);
    }, [sortOrder, sortBy]);

    const postData = async (newTodo) => {
        const updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList);


        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        const todoData = {
            fields: newTodo
        }
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
                throw new Error(`Error: ${response.status} - ${await response.text()} `);
            };
            await response.json();
            fetchData(sortBy, sortOrder)

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
        (<>
            <div className={styles.titleInputContainer}>
                <h1 className={styles.title}>Shopping List</h1>
                <div className={styles.sortBtnsContainer}>
                    <button className={styles.titleSortBtn} onClick={() => toggleSortOrder('title')}>
                        Sort by Title: {sortBy === 'title' ? sortOrder === 'asc' ? 'Ascending' : 'Descending' : 'None'}
                    </button>
                    <button className={styles.createdSortBtn} onClick={() => toggleSortOrder('createdTime')}>
                        Sort by Created Time: {sortBy === 'createdTime' ? sortOrder === 'asc' ? 'Ascending' : 'Descending' : 'None'}
                    </button>
                </div>
                <AddTodoForm onAddTodo={addTodo} />
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo} />
            )}
        </>)
    );
};

TodoContainer.propTypes = {
    newTodo: propTypes.func.isRequired,
    id: propTypes.func.isRequired,
}

export default TodoContainer;