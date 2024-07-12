import classes from './todos.module.css';

function CompletedTask(props) {
    const buttonHandler = (id) => {
    };

    return (
        <ul className={classes.todoList}>
            {props.todos.map(todo => (
                <li key={todo.id} className={classes.todoItem}>
                    <div className={classes.todoName}>{todo.name}</div>
                    <div className={classes.todoDescription}>{todo.description}</div>
                    <button className={classes.deleteButton} onClick={() => buttonHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default CompletedTask;
