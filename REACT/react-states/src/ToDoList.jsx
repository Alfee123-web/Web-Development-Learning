import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {

    let [todos, setTodos] = useState([{
        task: "sample-task", id: uuidv4(),
        isDone: false
    },]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            todos.filter((todo) => todo.id != id));



    };
    //updating all elements in array

    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };

    //updating one element in array
    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };


    return (
        <div>
            <input placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue} />
            <br />
            <br />
            <button onClick={addNewtask}>Add task</button>
            <br />
            <br />
            <br />

            <h4>Tasks to do</h4>
            <ul>

                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}   </span>
                            &nbsp;  &nbsp;  &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))}

            </ul>
            <br />
            <button onClick={markAllDone}>Mark all as done</button>
        </div>
    )
}
