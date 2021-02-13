import React from 'react'

import { render /*, screen*/ } from 'utils/testUtils/helperRtl'

import ListItem from '..'

describe('ListItem Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<ListItem />)
    expect(container).toMatchSnapshot()
  })
})
