import {combineReducers} from 'redux'
import users from './users/reducer'
import requests from './requests/reducer'
import userForm from './userForm/reducer'

const rootReducer = combineReducers({
  requests,
  users,
  userForm
})

export default rootReducer
