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

const TodoList = (props) => {
    return (<ul>
        {
            <TodoListItem>{props.todoList}</TodoListItem>
        }
    </ul>)

}

export default TodoList