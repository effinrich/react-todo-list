import React from 'react'

import { render } from 'common/utils/testing/helperRtl'

import BodyCopy from '..'

describe('BodyCopy Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<BodyCopy />)
    expect(getByTestId('body-copy')).toBeInTheDocument()
  })

  it('should render child element', () => {
    const { container } = render(<BodyCopy />)
    expect(container.firstChild).toBeDefined()
  })
})
