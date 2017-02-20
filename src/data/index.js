import {combineReducers} from 'redux'
import auth from './auth/reducer'
import users from './users/reducer'
import requests from './requests/reducer'
import userForm from './userForm/reducer'

const rootReducer = combineReducers({
  requests,
  auth,
  users,
  userForm
})

export default rootReducer
