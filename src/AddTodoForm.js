import { React } from "react";

const AddTodoForm = () => {
    return (
        <form>
            <label htmlFor="todoTitle" />
            <input id="todoTitle" type="text" >Title</input>
            <button>Add</button>
        </form>

    );

}

export default AddTodoForm

