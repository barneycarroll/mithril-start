import * as types from '../actionTypes'
import * as api from './api'

import {beginRequest, completeRequest, thrownRequest} from '../requests/actions'

export function loadUsersSuccess (users) {
  return { type: types.LOAD_USERS_SUCCESS, users }
}

export function loadUserSuccess (user) {
  return { type: types.LOAD_USER_SUCCESS, user }
}

export function createUserSuccess (user) {
  return { type: types.CREATE_USER_SUCCESS, user }
}

export function updateUserSuccess (user) {
  return { type: types.UPDATE_USER_SUCCESS, user }
}

export function loadUsers () {
  return function (dispatch) {
    api.getUsers()
    .then(users => {
      dispatch(loadUsersSuccess(users))
    })
    .catch(e => {
      console.log('error from actions file: ' + e)
    })
  }
}

export function loadUser (id) {
  return function (dispatch) {
    api.getUser(id)
    .then(user => {
      dispatch(loadUserSuccess(user))
    })
    .catch(e => {
      console.log('error from actions file: ' + e)
    })
  }
}

export function saveUser (user) {
  return function (dispatch) {
    dispatch(beginRequest())
    api.saveUser(user)
    .then(savedUser => {
      dispatch(completeRequest())
      user.id
      ? dispatch(updateUserSuccess(savedUser))
      : dispatch(createUserSuccess(savedUser))
    })
    .catch(e => {
      dispatch(thrownRequest())
      console.log('error from actions file: ' + e)
    })
  }
}
