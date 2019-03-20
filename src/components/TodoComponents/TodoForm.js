import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        name="task"
        placeholder="...todo"
        onChange={props.handleChanges} 
      />
      <button onClick={props.updateList}>Add Todo</button>
      <button onClick={props.clearList}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
