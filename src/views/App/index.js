// import loadable from '@loadable/component'
import { Box } from 'reflexbox'

import AppBar from 'components/AppBar'
import Image from 'components/Image'
import Logo from 'assets/logo.svg'

import StyledApp, { GlobalStyle, StyledAppContainer } from './style'

const App = props => {
  return (
    <StyledApp mt={2} data-testid="app">
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
