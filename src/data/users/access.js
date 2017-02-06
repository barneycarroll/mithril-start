import { store } from '../../store'

function users () {
  return store.getState().users
}

export function getUserById (id) {
  var user = users().filter(u => {
    var idInt = parseInt(id)
    return u.id === idInt
  })
  if (user.length) return user[0]
  return null
}

export function getUsersSortedById () {
  return users().slice().sort((a, b) => {
    return a.id - b.id
  })
}
