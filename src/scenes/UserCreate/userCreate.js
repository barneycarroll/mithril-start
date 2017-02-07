import m from 'mithril'
import userForm from '../../components/userForm'

export default {
  view () {
    return m('.userCreate', [
      m('h1', 'User'),
      m(userForm)
    ])
  }
}
