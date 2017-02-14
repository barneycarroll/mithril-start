import * as types from '../actionTypes'

var initialState = {
  numberPending: 0,
  numberError: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BEGIN_REQUEST:
      return Object.assign({}, state, { numberPending: state.numberPending + 1 })
    case types.COMPLETE_REQUEST:
      return Object.assign({}, state, { numberPending: state.numberPending - 1 })
    case types.THROW_REQUEST:
      return Object.assign({}, state, { numberError: state.numberError + 1 })
    default:
      return state
  }
}
