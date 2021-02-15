import React from 'react'

import { render /*, screen*/ } from 'utils/testing/helperRtl'

import ToDoItem from '..'

describe('ToDoItem Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<ToDoItem />)
    expect(getByTestId('to-do-item')).toBeInTheDocument()
  })
})
