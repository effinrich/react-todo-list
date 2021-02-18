import React, { useEffect, useMemo } from 'react'
import Loadable from '@loadable/component'
import { Box } from 'reflexbox'
import { useSelector, useDispatch } from 'react-redux'

import AppBar from 'components/AppBar'
import Image from 'components/Image'
import Logo from 'assets/logo.svg'
import LoadingView from 'components/LoadingView'
import { fetchTodos, patchTodoItem } from 'store/todos'

import StyledApp, { GlobalStyle, StyledAppContainer } from './style'

const TodoList = Loadable(
  /* istanbul ignore next */ () => import('components/TodoList')
)

const App = props => {
  const { todosList, error } = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const mappedTodoList = useMemo(
    () =>
      todosList.map(todo => {
        const copyTodo = { ...todo }
        copyTodo.dueDate = new Date(todo.dueDate) || new Date(8640000000000000)
        return copyTodo
      }),
    [todosList]
  )

  const sortedTodosList = useMemo(
    () =>
      mappedTodoList.sort(function (a, b) {
        if (a.isComplete === b.isComplete) return b.dueDate - a.dueDate
        return a.isComplete ? 1 : -1
      }),
    [mappedTodoList]
  )

  useEffect(() => {
    const handleFetchTodos = () => {
      dispatch(fetchTodos())
    }

    handleFetchTodos()
  }, [dispatch])

  const handlePatchTodoItem = todoId => {
    const changeSet = {
      isComplete: true
    }

    dispatch(patchTodoItem(todoId, changeSet))
  }

  return (
    <StyledApp mt={6} data-testid="app">
      <AppBar data-testid="app-bar">
        <Box>
          <Image maxWidth={240} alt="logo" src={Logo} />
        </Box>
      </AppBar>
      <StyledAppContainer>
        <TodoList
          todos={sortedTodosList}
          onChange={handlePatchTodoItem}
          error={error}
          fallback={
            todosList.length >= 0 && (
              <LoadingView loadingText="Fetching Todo List" />
            )
          }
        />
      </StyledAppContainer>
      <GlobalStyle {...props} />
    </StyledApp>
  )
}

export default App
