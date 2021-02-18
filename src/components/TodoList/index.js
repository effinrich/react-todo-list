import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

import StyledTodoList from './style'

const TodoList = ({ todos, ...rest }) => {
  return (
    <StyledTodoList data-testid="todo-list">
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} {...rest} />
      ))}
    </StyledTodoList>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any
}

export default TodoList
