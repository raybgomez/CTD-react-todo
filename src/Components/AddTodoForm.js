import { useState } from 'react';
import InputWithLabel from './InputWithLabel.js';
import styles from './App.module.css';
import PropTypes from "prop-types";


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
        (<form className={styles.form} onSubmit={handleAddTodo}>
            <InputWithLabel
                id="todoTitle"
                name="title"
                type="text"
                value={todoTitle}
                onChange={handleTitleChange}
            >
                <strong></strong>
            </InputWithLabel>
            <button className={styles.addBtn}>Add</button>
        </form>)
    );
};

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}

export default AddTodoForm

