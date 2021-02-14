import React from 'react'
import { Box } from 'reflexbox'

import { render } from 'utils/helperRtl'
import Image from 'components/Image'
import Logo from 'assets/logo.svg'

import AppBar from '..'

const children = () => (
  <Box>
    <Image maxWidth={240} alt="logo" src={Logo} />
  </Box>
)

describe('AppBar Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<AppBar />)
    expect(container).toMatchSnapshot()
  })

  it('should render a logo image', () => {
    const { getByAltText } = render(<AppBar children={children()} />)
    expect(getByAltText(/logo/i)).toBeInTheDocument()
  })
})
