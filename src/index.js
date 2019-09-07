import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'
import configureStore from './configureStore'

import * as serviceWorker from './serviceWorker'

import Root from './Root'
import './index.css'

const store = configureStore()

WebFont.load({
  google: {
    families: [
      'Saira Condensed:300,400,500',
      'sans-serif'
    ]
  }
})

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.unregister()
