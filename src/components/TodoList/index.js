import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
// import { compareAsc } from 'date-fns'

import StyledTodoList from './style'

const TodoItem = Loadable(
  /* istanbul ignore next */ () => import('common/components/TodoItem')
)

const TodoList = ({ todos, ...rest }) => {
  return (
    <StyledTodoList data-testid="todo-list">
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} {...rest} />
      ))}
      {/* .sort( (a, b) => b.dueDate && new Date(b.dueDate) - a.dueDate && new
      Date(a.dueDate) ) */}
    </StyledTodoList>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any
}

export default TodoList
