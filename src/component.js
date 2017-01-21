import m from 'mithril'
import {getUsers} from './data/userApi'

export default {
  oninit (vnode) {
    getUsers().then(result => {
      vnode.state.users = result
      m.redraw
    })
  },
  view (vnode) {
    return vnode.state.users ? m('.users', [
      m('h1', 'Users'),
      m('table#users', [
        vnode.state.users.map(user => {
          return m('tr', [
            m('td', m('a', {href: '#', 'data-id': user.id, className: 'deleteUser'}, 'delsssssete')),
            m('td', user.id),
            m('td', user.firstName),
            m('td', user.lastName),
            m('td', user.email)
          ])
        })
      ])
    ]) : m('h1', 'Loading')
  }
}
