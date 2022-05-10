import React from 'react'

import Todo from './Todo'

const TodoList = props => {
  return (
    <div>
      <Todo todos={props.todos} toggleCompleted={props.toggleCompleted} />
    </div>
  )
}

export default TodoList
