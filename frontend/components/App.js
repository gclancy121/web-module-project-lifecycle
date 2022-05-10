const URL = 'http://localhost:9000/api/todos'

import React from 'react'
import TodoList from './TodoList';
import TodoForm from './Form';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

    
    fetchAllTodos = () => {
      axios.get(URL)
      .then(res => {
        this.setState({
          todos: res.data.data
        })
      })
      console.log(this.state.todos)
    }
    

    addTodo = (todo) => {
      const newTodo = {
        name: todo,
        id: Date.now(),
        completed: false
      }

      this.setState({
        todos: [newTodo, ...this.state.todos]
      })
    }

    componentDidMount() {
      this.fetchAllTodos();
    }

    toggleCompleted = (todoId) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      })
    }


  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos = {this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTodo={this.addTodo}/>
      <button>Clear</button>
      </div>
    )
  }
}
export default App;