import React from 'react'

import theme from 'theme'

import ProgressCircle from '.'

export default {
  title: 'UI Library/ProgressCircle',
  component: ProgressCircle
}

const Template = (args) => <ProgressCircle {...args} />

export const Default = Template.bind({})
Default.args = { color: theme.brandColor }

export const Color = Template.bind({})
Color.args = {
  color: '#ff9900'
}

export const Scale = Template.bind({})
Scale.args = {
  scale: 0.756,
  color: theme.brandColor
}
