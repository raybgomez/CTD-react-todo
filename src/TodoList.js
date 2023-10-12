import { React } from "react";

const todoList = [
    {
        id: '0',
        title: 'My Hero Academia',
    },
    {
        id: '1',
        title: 'Attack on Titan',
    },
    {
        id: '2',
        title: 'Demon Slayer',
    },
];

const TodoList = () => {
    return <ul>
        {todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
}

export default TodoList