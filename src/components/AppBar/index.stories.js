import React from 'react'
import { Box } from 'reflexbox'

import Image from 'components/Image'
import Logo from 'assets/logo.svg'

import AppBar from '.'

export default {
  title: 'UI Library/AppBar',
  component: AppBar,
  parameters: {
    componentSubtitle:
      'Displays a fixed app bar header for branding, navigation, etc.'
  }
}

const Template = args => (
  <AppBar {...args}>
    <Box>
      <Image maxWidth={240} alt="logo" src={Logo} />
    </Box>
  </AppBar>
)

export const Default = Template.bind({})
