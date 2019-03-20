import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

const listItems = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: listItems,
      task: "",
    }
  }

  handleChanges = event => {

    console.log("event: " , event.target)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      itemList: [...this.state.itemList, newItem],
      task: ""
    });
  };

  // clearList = event => {
  //   event.preventDefault();
  //   const newItem = {
  //     task: this.state.task,
  //     id: this.state.id,
  //     completed: none
  //   };

  //   this.setState({
  //     itemList: [...this.state.itemList, newItem]
  //   });
  // };


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>

        <div className=''>
          {this.state.itemList.map((itemsFromMap, index) => (
            <Todo key={index} itemProp={itemsFromMap} />
          ))}
        </div>
       
        <TodoForm
          task={this.state.task}
          id={this.state.id}
          completed={this.state.completed}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default App;
// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
