import React from 'react'

import { render /*, screen*/ } from 'common/utils/testing/helperRtl'

import TodoItem from '..'

describe('TodoItem Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<TodoItem />)
    expect(getByTestId('to-do-item')).toBeInTheDocument()
  })
})
