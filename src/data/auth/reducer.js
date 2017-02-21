// import {groupBy, head, map, values, pipe, concat, prop, tap} from 'ramda'
import * as types from '../actionTypes'

const initialState = {
  auth: {

  },
  errors: {

  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return ''

    case types.LOGIN_FAIL:
      return ''

    default:
      return state
  }
}
