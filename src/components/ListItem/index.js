import React /*, {useState, useEffect}*/ from 'react'
import PropTypes from 'prop-types'

import StyledListItem from './style'

const ListItem = ({ examplePropText }) => {
  return <StyledListItem>{examplePropText}</StyledListItem>
}

ListItem.defaultProps = {
  examplePropText: 'example text'
}

ListItem.propTypes = {
  examplePropText: PropTypes.string
}

export default ListItem
