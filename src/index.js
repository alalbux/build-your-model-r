import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import WebFont from 'webfontloader'

import * as serviceWorker from './serviceWorker'

import reducer from './reducers'
import App from './containers/App'
import './index.css'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

WebFont.load({
  google: {
    families: [
      'Saira Condensed:300,400,500',
      'sans-serif'
    ]
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
