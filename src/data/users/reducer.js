import {lensPath, set, compose, merge, pipe, concat, uniqBy, over, prop, lensProp} from 'ramda'
import * as types from '../actionTypes'

var initialState = {
  form: {
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
  },
  list: []
}

const user = lensPath(['form', 'user'])
const baseUser = merge(initialState.form.user)
const list = lensProp('list')
const insertUniq = x =>
  pipe( concat([ x ]) , uniqBy( prop('id') ))

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return set( list, action.users, state)

    case types.LOAD_USER_SUCCESS:
      return over( list, insertUniq(action.user), state)

    case types.CREATE_USER_SUCCESS:
      return over( list, concat([action.user]), state )

    case types.UPDATE_USER_SUCCESS:
      return over( list, insertUniq(action.user), state)

    case types.SET_FORM_USER:
      return set(user, baseUser( action.user ), state)

    case types.SET_EMPTY_FORM_USER:
      return merge(state, initialState)

    case types.UPDATE_FORM_USER:
      const { property, value } = action
      var computed = lensPath(property.split('.'))
      var full = compose(user, computed)
      return set(full, value, state)

    default:
      return state
  }
}
