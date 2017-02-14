import m from 'mithril'
import userForm from '../../components/userForm'

export default {
  view ({attrs: {key}}) {
    console.log(key)
    return m('.users', [
      m('h1', 'User'),
      m(userForm, {key})
    ])
  }
}
