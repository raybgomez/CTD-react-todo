import styles from '../App.module.css';
import propTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        (<li className={styles.ListItem}><input className={styles.liCheckbox} type="checkbox"></input>{todo.title}
            <button className={styles.removeBtn} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>)
    );
}

TodoListItem.propTypes = {
    todo: propTypes.object.isRequired,
    onRemoveTodo: propTypes.func.isRequired,
}

export default TodoListItem