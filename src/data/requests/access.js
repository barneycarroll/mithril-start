import {store} from '../../store'

function requests () {
  return store.getState().requests
}

export function getNumberOfPendingRequests () {
  return requests().numberPending
}

export function getNumberOfThrownRequests () {
  return requests().numberError
}

export function allPendingHaveThrown () {
  return requests().numberPending === requests().numberError
}
