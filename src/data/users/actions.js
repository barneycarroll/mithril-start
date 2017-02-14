import * as types from '../actionTypes'
import * as api from './api'
import {store} from '../../store'
import {beginRequest, completeRequest, throwRequest} from '../requests/actions'
import {getUserFormData} from '../userForm/access'

export function boundLoadUsersSuccess (users) { store.dispatch(loadUsersSuccess(users)) }
export function boundLoadUserSuccess (user) { store.dispatch(loadUserSuccess(user)) }
export function boundCreateUserSuccess (user) { store.dispatch(createUserSuccess(user)) }
export function boundUpdateUserSuccess (user) { store.dispatch(updateUserSuccess(user)) }
export function boundLoadUsers () { return store.dispatch(loadUsers()) }
export function boundLoadUser (id) { return store.dispatch(loadUser(id)) }
export function boundSaveUser () { return store.dispatch(saveUser()) }

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
      dispatch(throwRequest())
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
      dispatch(throwRequest())
      throw Error(e)
    })
  }
}

export function saveUser () {
  return function (dispatch) {
    var user = getUserFormData().user
    dispatch(beginRequest())
    return api.saveUser(user)
    .then(savedUser => {
      user.id
      ? dispatch(updateUserSuccess(savedUser))
      : dispatch(createUserSuccess(savedUser))
      dispatch(completeRequest())
    })
    .catch(e => {
      dispatch(throwRequest())
      throw Error(e)
    })
  }
}
