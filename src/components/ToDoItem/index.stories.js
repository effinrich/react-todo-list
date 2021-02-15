import React from 'react'

import ToDoItem from '.'

export default {
  title: 'UI Library/ToDoItem',
  component: ToDoItem
}

const Template = args => <ToDoItem {...args} />

export const Default = Template.bind({})
Default.args = {
  examplePropText: 'example text'
}
