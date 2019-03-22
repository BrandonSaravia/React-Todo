// import React from 'react';


// const todoList = props => {
//     return {
//         <div className=''>
//           {this.state.itemList.map((itemsFromMap, index) => (
//             <Todo key={index} itemProp={itemsFromMap} />
//           ))}
//         </div>
//     }
// }

// export default todoList
import React from "react";

import Item from "./Item";

const Listitems = props => {
  return (
    <div className="">
      {props.listItems.map(item => (
        <Item key={item.completed} item={item} toggleItem={props.toggleCompleted} />
      ))}
    </div>
  );
};

export default Listitems;
