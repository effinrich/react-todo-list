import React from 'react'
// import { action } from '@storybook/addon-actions'

import Decorator from 'common/utils/storybook'

import BodyCopy from '.'

export default {
  title: 'Text/BodyCopy',
  decorators: [Decorator]
}

export const Default = () => (
  <BodyCopy>
    Poutine kitsch scenester shaman biodiesel shoreditch VHS, sustainable XOXO
    hashtag. Selvage shoreditch mustache venmo crucifix. Gochujang keffiyeh
    trust fund dreamcatcher glossier taxidermy narwhal fam organic post-ironic
    iceland sustainable.
  </BodyCopy>
)

Default.story = {
  name: 'default'
}

export const WAlignRight = () => (
  <BodyCopy textAlign="right">
    Poutine kitsch scenester shaman biodiesel shoreditch VHS, sustainable XOXO
    hashtag. Selvage shoreditch mustache venmo crucifix. Gochujang keffiyeh
    trust fund dreamcatcher glossier taxidermy narwhal fam organic post-ironic
    iceland sustainable.
  </BodyCopy>
)

WAlignRight.story = {
  name: 'w/align right'
}

export const WAlignCenter = () => (
  <BodyCopy textAlign="center">
    Poutine kitsch scenester shaman biodiesel shoreditch VHS, sustainable XOXO
    hashtag. Selvage shoreditch mustache venmo crucifix. Gochujang keffiyeh
    trust fund dreamcatcher glossier taxidermy narwhal fam organic post-ironic
    iceland sustainable.
  </BodyCopy>
)

WAlignCenter.story = {
  name: 'w/align center'
}

export const WColor = () => (
  <BodyCopy color="#ff9900">
    Poutine kitsch scenester shaman biodiesel shoreditch VHS, sustainable XOXO
    hashtag. Selvage shoreditch mustache venmo crucifix. Gochujang keffiyeh
    trust fund dreamcatcher glossier taxidermy narwhal fam organic post-ironic
    iceland sustainable.
  </BodyCopy>
)

WColor.story = {
  name: 'w/color'
}

export const Light = () => (
  <BodyCopy light>
    Poutine kitsch scenester shaman biodiesel shoreditch VHS, sustainable XOXO
    hashtag. Selvage shoreditch mustache venmo crucifix. Gochujang keffiyeh
    trust fund dreamcatcher glossier taxidermy narwhal fam organic post-ironic
    iceland sustainable.
  </BodyCopy>
)

Light.story = {
  name: 'light'
}
