import React /*, {useState, useEffect}*/ from 'react'
//import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import StyledListView from './style'

const ListView = props => {
  return (
    <StyledListView>
      <Helmet>
        <title>List View</title>
        <meta name="description" content="description here" />
      </Helmet>
    </StyledListView>
  )
}

ListView.defaultProps = {}

ListView.propTypes = {}

export default ListView
