import classes from './todos.module.css';

function TodoList(props) {
    const buttonHandler = (id) => {
      props.onDelete(id);
    };

    const checkboxHandler= async (id) => {
      const response = await fetch('/api/todo-status', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
      });
  };

    return (
        <ul className={classes.todoList}>
            {props.todos.map(todo => (
                <li key={todo.id} className={classes.todoItem}>
                  <input 
                        type="checkbox" 
                        className={classes.circleCheckbox} 
                        onChange={() => checkboxHandler(todo.id)}
                    />
                    <div className={classes.todoName}>{todo.name}</div>
                    <div className={classes.todoDescription}>{todo.description}</div>
                    <button className={classes.deleteButton} onClick={() => buttonHandler(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
