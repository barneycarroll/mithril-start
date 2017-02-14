import m from 'mithril'
import c from './users.css'
import {getUsersSortedById} from '../../data/users/access'

import userCard from './components/userCard'
export default {
  view (vnode) {
    return m('.users', [
      m(`header.${c.header}`, [
        m('h1', 'Users'),
        m(`a.${c.createButton}`, { href: '/users/create', oncreate: m.route.link }, 'Create User')
      ]),
      m('.user-list', [
        getUsersSortedById().map((user, index) => {
          return m(userCard, {user})
        })
      ])
    ])
  }
}
