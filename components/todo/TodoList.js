import classes from './todos.module.css';

function TodoList(props) {
    const buttonHandler = () => {};

    return (
        <ul className={classes.todoList}>
            {props.todos.map(todo => (
                <li key={todo.id} className={classes.todoItem}>
                    <div className={classes.todoName}>{todo.name}</div>
                    <div className={classes.todoDescription}>{todo.description}</div>
                    <button className={classes.deleteButton} onClick={buttonHandler}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
