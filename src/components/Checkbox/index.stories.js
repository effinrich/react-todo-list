import React from 'react'
import { action } from '@storybook/addon-actions'
import { config, withDesign } from 'storybook-addon-designs'

import Checkbox from '.'

export default {
  title: 'UI Library/Checkbox',
  decorators: [withDesign],
  component: Checkbox,
  parameters: {
    design: config({
      type: 'figma',
      url: 'https://www.figma.com/file/rVGBZD3dgFYelFCH3tL0Ti'
    })
  }
}

const Template = args => <Checkbox {...args} type="checkbox" name="checkbox" />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  onChange: action('onChange')
}

export const Touched = Template.bind({})
Touched.args = {
  onChange: action('onChange'),
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  onChange: action('onChange'),
  disabled: true
}

export const WError = Template.bind({})
WError.args = {
  onChange: action('onChange'),
  checked: true,
  error: true
}

export const WWarning = Template.bind({})
WWarning.args = {
  onChange: action('onChange'),
  checked: true,
  warning: true
}

// export const WWarning = () => (
//   <Checkbox name="checkbox" checked warning onChange={action('onChange')} />
// )

// WWarning.story = {
//   name: 'w/warning'
// }
