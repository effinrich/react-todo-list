import React from 'react'

import { render } from 'utils/testing/helperRtl'

import ProgressCircle from '..'

describe('ProgressCircle Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<ProgressCircle />)
    expect(getByTestId('progress-circle')).toBeInTheDocument()
  })

  it('should render child element', () => {
    const { container } = render(<ProgressCircle />)
    expect(container.firstChild).toBeDefined()
  })
})
