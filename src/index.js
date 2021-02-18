import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import Loadable from '@loadable/component'
import { HelmetProvider } from 'react-helmet-async'
import LogRocket from 'logrocket'

import theme from 'theme'
import store from 'store'

import reportWebVitals from './reportWebVitals'

// @loadable/component provides the same benefit of React's Lazy/Suspense code-splitting components, but doesn't require the Suspense component, so is a bit more efficient.
const App = Loadable(/* istanbul ignore next */ () => import('views/App'))

const helmetContext = {}

// app monitoring service
LogRocket.init('endpoint/todo-list')

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
