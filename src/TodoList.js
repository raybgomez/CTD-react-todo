import React from "react";
import TodoListItem from "./TodoListItem.js";


const TodoList = ({ todoList }) => {
    return (<ul>
        {
            todoList.map(todo => (<TodoListItem key={todo.id} todo={todo.title} />)
            )}
    </ul>)

}

export default TodoList