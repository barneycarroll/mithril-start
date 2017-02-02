import {createStore, applyMiddleware} from 'redux'
import rootReducer from './data/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

var store
export default function (initialState) {
  if (store === undefined) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
      )
  } else {
    return store
  }
}
