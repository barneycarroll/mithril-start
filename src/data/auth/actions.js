import * as types from '../actionTypes'
import * as api from './api'
import {beginRequest, completeRequest, throwRequest} from '../requests/actions'

export function loginSuccess (auth) {
  return { type: types.LOGIN_SUCCESS, auth }
}

export function loginFail (errors) {
  return { type: types.LOGIN_FAIL, errors }
}

export function saveUser (form) {
  return function (dispatch) {
    // var loginForm = GETCREDS
    dispatch(beginRequest())
    return api.login(form)
    .then(auth => {
      dispatch(loginSuccess(auth))
      dispatch(completeRequest())
    })
    .catch(e => {
      dispatch(loginFail(e))
      dispatch(throwRequest())
    })
  }
}
