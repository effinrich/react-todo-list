import styled, { createGlobalStyle } from 'styled-components'
import { space } from 'styled-system'

import theme from 'theme'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  html {
    min-height: 100%; 
    background-color: ${theme.bodyBackgroundColor};
    color: ${theme.textColor};
    margin: 0;
    padding: 0;
    min-height: 100%;
  }
  
  a {
    color: ${theme.brandColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default styled.div`
  ${space};
`

export const StyledAppContainer = styled.div`
  ${space};

  position: relative;
  max-width: ${theme.viewportMaxWidth};
  margin: 0 auto;
`
