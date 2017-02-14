import { store } from '../../store'

function form () {
  return store.getState().userForm
}

export function getUserFormData () {
  return Object.assign({}, form())
}
