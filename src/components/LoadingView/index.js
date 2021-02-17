import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'reflexbox'

import theme from 'common/theme'
import BodyCopy from 'common/components/Text/BodyCopy'
import ProgressCircle from 'common/components/ProgressCircle'

import StyledLoadingView from './style'

const propTypes = {
  loadingText: PropTypes.string,
  show: PropTypes.bool,
  showText: PropTypes.bool,
  showSubText: PropTypes.bool,
  scale: PropTypes.number,
  fullscreen: PropTypes.bool,
  color: PropTypes.string
}

const defaultProps = {
  show: true,
  showText: true,
  showSubText: true,
  scale: 0.25,
  color: theme.brandColor
}

const LoadingView = ({
  loadingText,
  showText,
  showSubText,
  scale,
  color,
  ...styleProps
}) => {
  return (
    <StyledLoadingView data-testid="loading-view" {...styleProps}>
      <Flex justifyContent="center" alignItems="center">
        <Box>
          <ProgressCircle scale={scale} color={color} />

          {showText && (
            <BodyCopy mt={3} textAlign="center">
              {loadingText}
              {showSubText && (
                <span>
                  {' '}
                  <br />
                  This may take a few moments, please be patient.
                </span>
              )}
            </BodyCopy>
          )}
        </Box>
      </Flex>
    </StyledLoadingView>
  )
}

LoadingView.propTypes = propTypes
LoadingView.defaultProps = defaultProps

export default LoadingView
