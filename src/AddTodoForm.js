import { React } from "react";

const AddTodoForm = (props) => {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);

    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                name="title"
                type="text"
            />

            <button>Add</button>
        </form>

    );

}

export default AddTodoForm

