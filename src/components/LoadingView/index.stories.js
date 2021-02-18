import React from 'react'

import theme from 'theme'

import LoadingView from '.'

export default {
  title: 'UI Library/LoadingView',
  component: LoadingView
}

const Template = args => (
  <LoadingView
    loadingText="Things are loading."
    color={theme.brandColor}
    {...args}
  />
)

export const Default = Template.bind({})
Default.args = { loadingText: 'Things are loading.', color: theme.brandColor }

export const Show = Template.bind({})
Show.args = {
  name: 'show',
  color: theme.brandColor,
  show: false
}

export const ShowText = Template.bind({})
ShowText.args = {
  name: 'showText',
  color: theme.brandColor,
  showText: false
}

export const Scale = Template.bind({})
ShowText.args = {
  name: 'Scale',
  color: theme.brandColor,
  scale: 0.5
}

export const Fullscreen = Template.bind({})
Fullscreen.args = {
  name: 'Fullscreen',
  color: theme.brandColor,
  fullscreen: true
}

export const ShowSubText = Template.bind({})
ShowSubText.args = {
  name: 'Show Sub Text',
  color: theme.brandColor,
  showSubText: false
}
