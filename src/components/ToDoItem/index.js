import React /*, {useState, useEffect}*/ from 'react'
import PropTypes from 'prop-types'

import StyledToDoItem from './style'

const ToDoItem = ({ examplePropText }) => {
  return (
    <StyledToDoItem data-testid="to-do-item">{examplePropText}</StyledToDoItem>
  )
}

ToDoItem.defaultProps = {
  examplePropText: 'example text'
}

ToDoItem.propTypes = {
  examplePropText: PropTypes.string
}

export default ToDoItem
