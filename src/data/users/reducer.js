import {groupBy, head, map, values, pipe, concat, prop, tap} from 'ramda'
import * as types from '../actionTypes'

const mergeIdLists =
  pipe(concat, tap(console.log), groupBy(prop('id')), tap(console.log), map(head), tap(console.log), values)

export default function (state = [], action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return mergeIdLists(action.users, state)

    case types.LOAD_USER_SUCCESS:
      return mergeIdLists([action.user], state)

    case types.CREATE_USER_SUCCESS:
      return mergeIdLists([action.user], state)

    case types.UPDATE_USER_SUCCESS:
      return mergeIdLists([action.user], state)

    default:
      return state
  }
}
