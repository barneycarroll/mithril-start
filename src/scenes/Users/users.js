import m from 'mithril'
import store from '../../store'

import userCard from './components/userCard'
export default {
  view (vnode) {
    return m('.users', [
      m('h1', 'Users'),
      m('a', { href: '/users/create', oncreate: m.route.link }, 'Create User'),

      m('.user-list', [
        store().getState().users.map((user, index) => {
          return m(userCard, {user})
        })
      ])
    ])
  }
}
