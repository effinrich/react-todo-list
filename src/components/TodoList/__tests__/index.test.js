import React from 'react'

import { render /*, screen*/ } from 'utils/testing/helperRtl'

import TodoList from '..'

describe('TodoList Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<TodoList todos={[]} onChange={() => {}} />)
    expect(getByTestId('todo-list')).toBeInTheDocument()
  })
})
