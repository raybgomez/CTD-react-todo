import React from "react";
import TodoListItem from "./TodoListItem.js";


const TodoList = ({ todoList, onRemoveTodo, id }) => {
    return (<ul>
        {
            todoList.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo.title}
                    onRemoveTodo={() => onRemoveTodo(todo.id)} />)
            )}
    </ul>)

}

export default TodoList