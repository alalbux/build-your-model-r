import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { loadState, saveState } from './localStorage'
import reducer from './reducers'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const persistedState = loadState()

  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}

export default configureStore
