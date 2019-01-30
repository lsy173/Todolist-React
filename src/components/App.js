import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  // state to manage TodoInput is needed.
  state = {
    input: '',  // input value
    // Initial Schedule data 
    todos: [
      { id:0, text: 'Study React.js', done: true},
      { id:1, text: 'Study Node.js', done: false},
      { id:2, text: 'Study Reinforcement Learning', done: false}
    ]
  }

  // id value taht is inserted schedule data.
  id = 1
  getId = () => {
    return ++this.id;  // return the id that is added 1 to current value.
  }

  handleChange = (e) => {
      const { value } = e.target;
      this.setState({
        input: value
      });
  }

  handleInsert = () => {
    const { todos, input } = this.state;

    // Create new data object.
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    // Insert new data into array.
    this.setState({
      todos:[...todos, newTodo],
      input: ''
    });
  }

  // Todo Item Toggling.
  handleToggle = (id) => {
    // Find array's index using 'id'.
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

      // Invert the done value of found data.
      const toggled = {
        ...todos[index],
        done: !todos[index].done
      };

      // Using slice, Copy the data near found data.
      // then, insert updated to do object in the gap.
      this.setState({
        todos: [
          ...todos.slice(0, index),
          toggled,
          ...todos.slice(index+1, todos.length)
        ]
      });
  }

  // Remove the chosen id from the array.
  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    
    // Copy data near slice, without found index.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleInsert, // Insert added.
      handleToggle, // Toggle added.
      handleRemove
    } = this;

    return (
     <PageTemplate>
       <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
       <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
     </PageTemplate>
    );
  }
}

export default App;
