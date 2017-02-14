import {lensPath, lensProp, clone, set, compose, merge} from 'ramda'
import validate from './validation'
import * as types from '../actionTypes'

var initialState = {
  user: {
    id: null,
    name: '',
    email: '',
    address: {
      streetAddress: '',
      city: '',
      county: '',
      zipCode: ''
    }
  },
  validationErrors: {}
}

const user = lensPath(['user'])
const errors = lensPath(['validationErrors'])
const baseUser = merge(initialState.user)

export default function (state = initialState, action) {
  const { property, value } = action
  switch (action.type) {
    case types.SET_FORM_USER:
      var userForm = set(user, baseUser(action.user), state)
      userForm.validationErrors = {}
      return userForm

    case types.SET_EMPTY_FORM_USER:
      return merge(state, initialState)

    case types.VALIDATE_USER_FIELD:
      var validation = validate(state.user)
      var computed = lensProp(property)
      var full = compose(errors, computed)
      if (validation[property]) {
        return set(full, validation[property], state)
      } else {
        var updatedErrors = clone(state.validationErrors)
        delete updatedErrors[property]
        return set(errors, updatedErrors, state)
      }

    case types.VALIDATE_USER_FORM:
      return set(errors, validate(state.user), state)

    case types.UPDATE_FORM_USER:
      var userPropertyLens = lensPath(property.split('.'))
      var fullUserPropertyLens = compose(user, userPropertyLens)
      return set(fullUserPropertyLens, value, state)

    default:
      return state
  }
}
