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
    dispatch(beginRequest())
    return api.getUsers()
    .then(users => {
      dispatch(loadUsersSuccess(users))
      dispatch(completeRequest())
    })
    .catch(e => {
      dispatch(thrownRequest())
      throw Error(e)
    })
  }
}

export function loadUser (id) {
  return function (dispatch) {
    dispatch(beginRequest())
    return api.getUser(id)
    .then(user => {
      dispatch(loadUserSuccess(user))
      dispatch(completeRequest())
    })
    .catch(e => {
      dispatch(thrownRequest())
      throw Error(e)
    })
  }
}

export function saveUser (user) {
  return function (dispatch) {
    dispatch(beginRequest())
    return api.saveUser(user)
    .then(savedUser => {
      user.id
      ? dispatch(updateUserSuccess(savedUser))
      : dispatch(createUserSuccess(savedUser))
      dispatch(completeRequest())
    })
    .catch(e => {
      dispatch(thrownRequest())
      throw Error(e)
    })
  }
}
