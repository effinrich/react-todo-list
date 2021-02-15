import React from 'react'

import { render /*, screen*/ } from 'utils/testing/helperRtl'

import ToDoList from '..'

describe('ToDoList View', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<ToDoList />)
    expect(getByTestId('to-do-list')).toBeInTheDocument()
  })
})
