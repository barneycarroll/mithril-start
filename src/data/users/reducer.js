import * as types from '../actionTypes'

export default function (state = [], action) {
  switch (action.type) {
    case types.CREATE_USER:
      return [...state, Object.assign({}, action.course)]
    case types.LOAD_USERS_SUCCESS:
      return action.courses
    default:
      return state
  }
}
