import m from 'mithril'
import store from '../../store'
import {createUser} from '../../data/users/actions'

import userCard from './components/userCard'
export default {
  user: {
    name: null
  },
  view (vnode) {
    var state = this
    return m('.users', [
      m('h1', 'Users'),

      m('form', {
        onsubmit: (e) => {
          e.preventDefault()
          store().dispatch(createUser(this.user))
        }
      }, [
        m('input', {
          type: 'text',
          placeholder: 'Title',
          value: this.user.title,
          oninput(){ state.user.name = this.value }
        }),
        m('button', {
          type: 'submit'
        }, 'Submit')
      ]),

      m('.user-list', [
        store().getState().users.map((user, index) => {
          return m(userCard, {user})
        })
      ])
    ])
  }
}
