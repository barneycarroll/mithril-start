import store from '../../store'

function requests () {
  return store().getState().requests
}

export function getNumberOfPendingRequests () {
  return requests().numberPending
}
