import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import store from 'store'

const helmetContext = {}

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <MemoryRouter>{children}</MemoryRouter>
      </HelmetProvider>
    </Provider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.object
}

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
