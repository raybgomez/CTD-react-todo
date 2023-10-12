import { React } from "react";

const AddTodoForm = () => {
    return (
        <form>
            <label>Title</label>
            <input id="todoTitle" type="text" htmlFor="todoTitle"></input>
            <button>Add</button>
        </form>

    );

}

export default AddTodoForm

