import TodoListItem from "./TodoListItem.js";
import propTypes from 'prop-types';


const TodoList = ({ todoList, onRemoveTodo }) => {
    return (<ul>
        {
            todoList.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo} />)
            )}
    </ul>)
}

TodoList.propTypes = {
    todoList: propTypes.func.isRequired,
    onRemoveTodo: propTypes.func.isRequired,
}

export default TodoList