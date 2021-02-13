import { createGlobalStyle } from 'styled-components'
// import loadable from '@loadable/component'
import { Box } from 'reflexbox'

import theme from 'theme'
import AppBar from 'components/AppBar'
import Image from 'components/Image'
import Logo from 'assets/logo.svg'

import StyledApp, { StyledAppContainer } from './style'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  html { min-height: 100%; }
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

const App = (props) => {
  return (
    <StyledApp mt={2}>
      <AppBar data-testid="app-bar">
        <Box>
          <Image maxWidth={240} alt="logo" src={Logo} />
        </Box>
      </AppBar>
      <StyledAppContainer>
        <Box variant="card">HELLO WORLD!</Box>
      </StyledAppContainer>
      <GlobalStyle {...props} />
    </StyledApp>
  )
}

export default App
