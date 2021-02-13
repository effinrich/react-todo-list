import React from 'react'

import { render /*, screen*/ } from 'utils/testUtils/helperRtl'

import ListView from '..'

describe('ListView View', () => {
  it('should render without crashing', () => {
    const { container } = render(<ListView />)
    expect(container).toMatchSnapshot()
  })
})
