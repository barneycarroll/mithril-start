import store from '../../store'

function users () {
  return store().getState().users
}

export function getUserById (id) {
  var user = users().filter(u => u.id == id)
  if (user.length) return user[0]
  return null
}
