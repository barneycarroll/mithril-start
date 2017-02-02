import * as types from '../actionTypes'
import * as api from './api'

export function createUser (course) {
  return {
    type: types.CREATE_USER,
    course
  }
}

export function loadUsersSuccess (courses) {
  return {
    type: types.LOAD_USERS_SUCCESS,
    courses
  }
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
