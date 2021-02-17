import styled from 'styled-components'
import { space } from 'styled-system'
import { Flex, Box } from 'reflexbox'
import color from 'tinycolor2'

import theme from 'common/theme'

const colorMap = {
  incomplete: 'lightGrey',
  complete: 'successColor',
  overdue: 'pinkErrorColor'
}

export default styled(Flex)`
  ${space};

  color: #000;

  background-color: ${props =>
    color(theme[colorMap[props.status]]).setAlpha(0.9).toRgbString()};
`

export const StyledDateBox = styled(Box)`
  border: 2px solid;
`

export const StyledDescBox = styled(Box)`
  text-decoration: ${({ status }) =>
    status === 'complete' ? 'line-through' : 'none'};
`
