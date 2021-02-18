import React from 'react'

import { render /*, screen*/ } from 'utils/testing/helperRtl'

import TodoItem from '..'

const todo = {
  id: '1',
  description: 'File 2020 Taxes',
  isComplete: true,
  dueDate: '2020-03-10T17:50:44.673Z'
}

describe('TodoItem Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<TodoItem todo={todo} onChange={() => {}} />)
    expect(getByTestId('to-do-item')).toBeInTheDocument()
  })
})
