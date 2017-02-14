import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './data/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

var store

function initialiseStore (initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(thunk, reduxImmutableStateInvariant())
      )
      )
}

function setAccessibleStore (reduxStore) {
  store = reduxStore
}

export {store, initialiseStore, setAccessibleStore}
