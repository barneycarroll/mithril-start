import {createStore, applyMiddleware} from 'redux'
import rootReducer from './index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

var store
export default function (initialState) {
  if (store === undefined) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(reduxImmutableStateInvariant())
      )
  } else {
    return store
  }
}
