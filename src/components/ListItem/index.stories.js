import React from 'react'

import ListItem from '.'

export default {
  title: 'UI Library/ListItem',
  component: ListItem
}

const Template = args => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  examplePropText: 'example text'
}
