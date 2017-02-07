import { store } from '../../store'

function users () {
  return store.getState().users.list
}

function form () {
  return store.getState().users.form
}

export function getUserById (id) {
  var user = users().filter(u => {
    return u.id === parseInt(id)
  })
  if (user.length) return user[0]
  return null
}

export function getUsersSortedById () {
  return users().slice().sort((a, b) => {
    return a.id - b.id
  })
}

export function getUserFormData () {
  return Object.assign({}, form())
}
