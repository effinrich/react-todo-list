import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { isPast, format, getYear } from 'date-fns'
import { Box, Flex } from 'reflexbox'

import Checkbox from 'components/Checkbox'

import StyledTodoItem, { StyledDateBox, StyledDescBox } from './style'

const TodoItem = ({ todo, onChange }) => {
  const [status, setStatus] = useState('incomplete')
  const [formattedDate] = useState(todo.dueDate ? new Date(todo.dueDate) : null)
  const [is1969, setIs1969] = useState(false)

  useEffect(() => {
    if (todo.isComplete) {
      setStatus('complete')
    } else if (!todo.isComplete && isPast(formattedDate) && !is1969) {
      setStatus('overdue')
    } else if (is1969) {
      setStatus('incomplete')
    } else {
      setStatus('incomplete')
    }
  }, [todo, formattedDate, is1969])

  useEffect(() => {
    setIs1969(getYear(formattedDate) === 1969)
  }, [formattedDate])

  return (
    <StyledTodoItem
      variant="listItem"
      data-testid="to-do-item"
      status={status}
      alignItems="center"
      justifyContent="space-between"
      px="10px"
      py={formattedDate && !is1969 ? '10px' : '13px'}
    >
      <Box>
        <Flex alignItems="center">
          <Box mr={1}>
            <Checkbox
              type="checkbox"
              name={`todo${todo.id}`}
              onChange={() => onChange(todo.id)}
              checked={todo.isComplete}
            />
          </Box>
          <StyledDescBox status={status}>{todo.description}</StyledDescBox>
        </Flex>
      </Box>
      {formattedDate && !is1969 && (
        <StyledDateBox p="5px">
          {format(formattedDate, 'MM/dd/yyyy')}
        </StyledDateBox>
      )}
    </StyledTodoItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  status: PropTypes.oneOf(['incomplete', 'complete', 'overdue']),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.any
}

export default TodoItem
