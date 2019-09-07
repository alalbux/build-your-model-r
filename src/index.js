import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import WebFont from 'webfontloader'

import * as serviceWorker from './serviceWorker'

import reducer from './reducers'
import App from './containers/App'
import './index.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware
    )
  )
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
