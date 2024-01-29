import styles from './TodoListItem.module.css'

const TodoListItem = ({ todo, onRemoveTodo }) => {

    return (
        (<li className={styles.ListItem}><input className={styles.liCheckbox} type="checkbox"></input>{todo.title}
            <button className={styles.removeBtn} type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>)
    );
}

export default TodoListItem