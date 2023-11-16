import React from "react";


const TodoListItem = ({ todo, onRemoveTodo, id }) => {

    return (
        <li>{todo}
            <button type="button" onClick={onRemoveTodo}>Remove</button>
        </li>
    );
}

export default TodoListItem