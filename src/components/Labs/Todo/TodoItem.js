const TodoItem = ({
  todo = {
      done: true,
      title: 'Buy milk',
      status: 'COMPLETED'
  }
}) => {
    return(
        <li key={todo.title}>
            <input type="checkbox"
                defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
