import * as types from '../actionTypes'

export function setFormUser (user) {
  return { type: types.SET_FORM_USER, user }
}

export function setEmptyFormUser () {
  return { type: types.SET_EMPTY_FORM_USER }
}

export function updateFormUser ({ target: { name, value } }) {
  return { type: types.UPDATE_FORM_USER, property: name, value }
}
