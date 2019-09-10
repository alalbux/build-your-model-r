import React from 'react'
import { Provider } from 'react-redux'
import App from './containers/App'
import GlobalStyles from './styles/globalStyles'

const Root = ({ store }) => (
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
)

export default Root