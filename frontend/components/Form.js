import React from 'react'


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state={
      todoText: ''
    }
  }

  handleChanges = evt => {
    this.setState({
      todoText: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: ''
    })
  }

 
  render() {
     {/* patch URL: http://localhost:9000/api/todos/:id*/}
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='todo'
          value={this.state.todoText}
          onChange={this.handleChanges}
          />
        <button>Add</button>
        
        
      </form>
    );
  }
}

export default TodoForm;