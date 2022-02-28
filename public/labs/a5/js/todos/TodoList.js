import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return (`
        <ul>
        ${todos.map((element)=>{return TodoItem(element)}).join("\n")}
        </ul>
    `);
}
export default TodoList;