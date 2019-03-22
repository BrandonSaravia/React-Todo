import React from 'react';

function Todo(props) {
  return (
    <div 
       className={`item${props.item.completed ? " completed" : ""}`}
       onClick={() => props.toggleItem(props.item.id)}>
        <li>{props.itemProp.task}</li>
    </div>
  );
}

export default Todo;

