import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, space, lineHeight } from 'styled-system'

import theme from 'theme'

export default styled.p`
  ${color};
  ${fontSize};
  ${fontWeight};
  ${space};
  ${lineHeight};
  text-align: ${props => props.textAlign};
  overflow-wrap: break-word;
  ${props =>
    props.light
      ? css`
          font-weight: ${theme.fontSizeLight};
        `
      : null};
`
