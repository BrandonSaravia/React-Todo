import React from 'react';

function Todo(props) {
  return (
    <div className="task-info">
        <p>{props.itemProp.task}</p>
    </div>
  );
}

export default Todo;
