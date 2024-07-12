import { useRef } from 'react';
import classes from './TodoForm.module.css';

function TodoForm(props) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      name: enteredName,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor='name'>Task Name</label>
        <input type='text' required id='name' ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          required
          rows='5'
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div>
        <button>Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;
