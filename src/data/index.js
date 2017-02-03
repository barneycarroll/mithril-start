import {combineReducers} from 'redux'
import users from './users/reducer'
import requests from './requests/reducer'

const rootReducer = combineReducers({
  requests,
  users
})

export default rootReducer
