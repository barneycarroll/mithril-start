import * as types from '../actionTypes'
import {store} from '../../store'

export function boundSetFormUser (user) { store.dispatch(setFormUser(user)) }
export function boundSetEmptyFormUser (user) { store.dispatch(setEmptyFormUser(user)) }
export function boundValidateUserField (event) { store.dispatch(validateUserField(event)) }
export function boundValidateUserForm () { store.dispatch(validateUserForm()) }
export function boundUpdateFormUser (event) { store.dispatch(updateFormUser(event)) }

export function setFormUser (user) {
  return { type: types.SET_FORM_USER, user }
}

export function setEmptyFormUser () {
  return { type: types.SET_EMPTY_FORM_USER }
}

export function validateUserField ({ target: { name } }) {
  return { type: types.VALIDATE_USER_FIELD, property: name }
}

export function validateUserForm () {
  return { type: types.VALIDATE_USER_FORM }
}

export function updateFormUser ({ target: { name, value } }) {
  return { type: types.UPDATE_FORM_USER, property: name, value }
}
