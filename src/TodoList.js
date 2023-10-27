import React from "react";
import TodoListItem from "./TodoListItem.js";

const todoList = [
    {
        id: '0',
        title: 'My Hero Academia',
    },
    {
        id: '1',
        title: 'Attack on Titan',
    },
    {
        id: '2',
        title: 'Demon Slayer',
    },
];

const TodoList = () => {
    return (<ul>
        {todoList.map(todo =>
            <TodoListItem
                key={todo.id} todoTitle={todo.title} />
        )}
    </ul>)

}

export default TodoList