import React from 'react'

import { render /*, screen*/ } from 'common/utils/testing/helperRtl'

import TodoList from '..'

describe('TodoList Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<TodoList todos={[]} />)
    expect(getByTestId('todo-list')).toBeInTheDocument()
  })
})
