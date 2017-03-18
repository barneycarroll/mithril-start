import m from 'mithril'
import {getJs} from '../../utils'
import {boundLoadUsers} from '../../data/users/actions'
import layout from '../../components/layout'

function getData () {
  return window.__STATE_IS_PRELOADED__ || boundLoadUsers()
}

export default {
  onmatch () {
    return Promise.all([
      getJs(() => import('./users.js')),
      getData()
    ]).then((data) => {
      window.__STATE_IS_PRELOADED__ = false
      return data[0]
    })
  },
  render (vnode) {
    this.title = 'Users - Mithril'
    this.description = 'Users Page'
    document.title = this.title
    return m(layout, vnode)
  }
}
