import React, { useEffect } from 'react'
import Loadable from '@loadable/component'
import { Box } from 'reflexbox'
import { useSelector, useDispatch } from 'react-redux'

import AppBar from 'common/components/AppBar'
import Image from 'common/components/Image'
import Logo from 'assets/logo.svg'
import LoadingView from 'common/components/LoadingView'
import { fetchTodos, patchTodoItem } from 'store/todos'

import StyledApp, { GlobalStyle, StyledAppContainer } from './style'

const TodoList = Loadable(
  /* istanbul ignore next */ () => import('common/components/TodoList')
)

const App = props => {
  const dispatch = useDispatch()
  const { todosList, error } = useSelector(state => state.todos)

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
          todos={todosList}
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
