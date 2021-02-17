import React from 'react'

import { render } from 'common/utils/testing/helperRtl'

import LoadingView from '..'

describe('LoadingView Component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<LoadingView />)
    expect(getByTestId('loading-view')).toBeInTheDocument()
  })

  it('should render child element', () => {
    const { container } = render(<LoadingView />)
    expect(container.firstChild).toBeDefined()
  })
})
