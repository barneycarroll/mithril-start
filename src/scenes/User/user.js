import m from 'mithril'
import {store} from '../../store'
import {saveUser} from '../../data/users/actions'
import {getUserById} from '../../data/users/access'
import userForm from '../../components/userForm'

export default {
  oninit ({state, attrs: {id}}) {
    var user = id
              ? getUserById(id)
              : {}
    state.user = Object.assign({}, user)
    state.errors = {}
  },

  view ({state: {errors, user, saveUser}, attrs: {id}}) {
    return m('.users', [
      m('h1', 'User'),
      m(userForm, {
        user,
        errors,
        onsubmit: formSubmit(user)
      })
    ])
  }
}

function formSubmit (user) {
  return function (event) {
    event.preventDefault()
    store.dispatch(saveUser(user))
  }
}
