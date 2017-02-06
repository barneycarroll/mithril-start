import m from 'mithril'
import {store} from '../../store'
import {saveUser} from '../../data/users/actions'
import userForm from '../../components/userForm'

export default {
  oninit ({state, attrs: {id}}) {
    state.user = {}
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
    return store.dispatch(saveUser(user)).catch(() => console.log('error from formsubmission'))
  }
}
