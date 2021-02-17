import { createSlice } from '@reduxjs/toolkit'

import { getTodos, patchTodo } from './api'

const todosInitialState = {
  todosList: [],
  isLoading: false,
  error: null
}

const startLoading = state => {
  state.isLoading = true
}

const loadingFailed = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}

const slice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    fetchTodosStart: startLoading,
    patchTodoStart: startLoading,
    fetchTodosSuccess: (state, action) => {
      state.todosList = action.payload
      state.isLoading = false
      state.error = null
    },
    patchTodoSuccess: (state, action) => {
      const todosIndex = state.todosList.findIndex(
        todo => todo.id === action.payload
      )
      const mutatedTodosList = [...state.todosList]

      mutatedTodosList[todosIndex] = {
        ...mutatedTodosList[todosIndex],
        isComplete: !mutatedTodosList[todosIndex].isComplete
      }
      state.todosList = mutatedTodosList
      state.isLoading = false
      state.error = null
    },
    fetchTodosFailure: loadingFailed,
    patchTodoFailure: loadingFailed
  }
})

export default slice.reducer

// Actions
const {
  fetchTodosStart,
  patchTodoStart,
  fetchTodosSuccess,
  patchTodoSuccess,
  fetchTodosFailure,
  patchTodoFailure
} = slice.actions

export const fetchTodos = () => async dispatch => {
  try {
    dispatch(fetchTodosStart())
    const todosArray = await getTodos()
    dispatch(fetchTodosSuccess(todosArray))
  } catch (err) {
    dispatch(fetchTodosFailure(err.toString()))
  }
}

export const patchTodoItem = (todoId, changeSet) => async dispatch => {
  try {
    dispatch(patchTodoStart())
    await patchTodo(todoId, changeSet)
    dispatch(patchTodoSuccess(todoId))
  } catch (err) {
    dispatch(patchTodoFailure(err.toString()))
  }
}
