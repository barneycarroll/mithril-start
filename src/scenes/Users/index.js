import m from 'mithril'
import {getJs} from '../../utils'
import {boundLoadUsers} from '../../data/users/actions'
import layout from '../../components/layout'

function getData () {
  return window.__STATE_IS_PRELOADED__ || boundLoadUsers()
}

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs(() => import('./users.js')),
      getData()
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'Users - Mithril'
    this.description = 'Users Page'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
