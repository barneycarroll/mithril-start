import * as types from '../actionTypes'

export function beginRequest () {
  return { type: types.BEGIN_REQUEST }
}

export function completeRequest () {
  return { type: types.COMPLETE_REQUEST }
}

export function thrownRequest () {
  return { type: types.THROWN_REQUEST }
}
