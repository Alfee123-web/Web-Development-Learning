import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
   const todos = useSelector((state) => state.todo.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const clickHandler = (id) =>{
       dispatch(deleteTodo(id));
    }
    const doneHandler = (id) => {
        dispatch(markAsDone(id));
    }
    return (
        <>
        <AddForm/>
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{textDecoration:todo.isDone ? "line-through" : "none"}}
                    >{todo.task}
                    <button onClick={() => doneHandler(todo.id)}>
    {todo.isDone ? "Mark as Undone" : "Mark as Done"}
</button>
                    <button onClick={() => clickHandler(todo.id)}>Delete</button>
                 
                    </li>
                ))}
            </ul>
        </>
    )
}