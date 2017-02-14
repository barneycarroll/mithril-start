import * as types from '../actionTypes'
import {store} from '../../store'

export const boundBeginRequest = () => store.dispatch(beginRequest())

export const boundCompleteRequest = () => store.dispatch(completeRequest())

export const boundThrowRequest = () => store.dispatch(throwRequest())

export function beginRequest () {
  return { type: types.BEGIN_REQUEST }
}

export function completeRequest () {
  return { type: types.COMPLETE_REQUEST }
}

export function throwRequest () {
  return { type: types.THROW_REQUEST }
}
