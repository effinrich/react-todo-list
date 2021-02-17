import React from 'react'
import { config, withDesign } from 'storybook-addon-designs'
import { action } from '@storybook/addon-actions'

import TodoItem from '.'

export default {
  title: 'UI Library/TodoItem',
  decorators: [withDesign],
  component: TodoItem,
  parameters: {
    design: config({
      type: 'figma',
      url: 'https://www.figma.com/file/rVGBZD3dgFYelFCH3tL0Ti'
    })
  }
}

const Template = args => <TodoItem {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: action('onChange'),
  todo: {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: false,
    dueDate: '2022-03-10T17:50:44.673Z'
  }
}

export const Complete = Template.bind({})
Complete.args = {
  onChange: action('onChange'),
  todo: {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: true,
    dueDate: '2020-03-10T17:50:44.673Z'
  }
}

export const Overdue = Template.bind({})
Overdue.args = {
  onChange: action('onChange'),
  todo: {
    id: '1',
    description: 'File 2020 Taxes',
    isComplete: false,
    dueDate: '2020-03-10T17:50:44.673Z'
  }
}
