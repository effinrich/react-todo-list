import { render } from 'utils/testing/helperRtl'

import App from '..'

describe('App View', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app')).toBeInTheDocument()
  })
})
