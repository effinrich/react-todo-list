import React /*, {useState, useEffect}*/ from 'react'
//import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

import StyledToDoList from './style'

const ToDoList = props => {
  return (
    <StyledToDoList data-testid="to-do-list">
      <Helmet>
        <title>To Do List</title>
        <meta name="description" content="description here" />
      </Helmet>
    </StyledToDoList>
  )
}

ToDoList.defaultProps = {}

ToDoList.propTypes = {}

export default ToDoList
