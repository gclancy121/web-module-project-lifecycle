import React from 'react'

const Todo = props => {
  return (
    <div>
      {props.todos.map(todo=>{
        return (
          <div onClick={() => props.toggleCompleted(todo.id)}key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
            <p>{todo.name}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Todo;