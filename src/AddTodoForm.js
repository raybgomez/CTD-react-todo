import { useState } from 'react';
import InputWithLabel from './InputWithLabel.js';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        onAddTodo({
            title: todoTitle,
        });
        setTodoTitle('');
    }
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id="todoTitle"
                name="title"
                type="text"
                value={todoTitle}
                onChange={handleTitleChange}
            >
                <strong>Title:</strong>
            </InputWithLabel>
            <button>Add</button>
        </form>

    );

}

export default AddTodoForm

