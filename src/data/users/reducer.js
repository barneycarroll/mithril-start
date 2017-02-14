import {groupBy, last, map, values, pipe, concat, prop} from 'ramda'
import * as types from '../actionTypes'

const mergeIdLists =
  pipe(concat, groupBy(prop('id')), map(last), values)

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
