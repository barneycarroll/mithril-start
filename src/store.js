import {createStore, applyMiddleware} from 'redux'
import rootReducer from './data/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

var store

function initialiseStore (initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
      )
}

function setAccessibleStore (reduxStore) {
  store = reduxStore
}

export {store, initialiseStore, setAccessibleStore}
