import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  // state to manage TodoInput is needed.
  state = {
    input: ''  // input value
  }

  handleChange = (e) => {
      const {value} = e.target;
      this.setState({
        input: value
      });
  }

  render() {
    const { input } = this.state;
    const {
      handleChange
    } = this;

    return (
     <PageTemplate>
       <TodoInput/>
       <TodoList/>
     </PageTemplate>
    );
  }
}

export default App;
