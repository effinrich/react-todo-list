import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${theme.bodyBackgroundColor};
    color: ${theme.defaultTextColor};
  }
  
  a {
    color: ${theme.brandColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  )
]
