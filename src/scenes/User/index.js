import m from 'mithril'
import {getJs} from '../../utils'
import {boundLoadUser} from '../../data/users/actions'
import {getUserById} from '../../data/users/access'
import layout from '../../components/layout'

function getData (id) {
  return window.__STATE_IS_PRELOADED__ || boundLoadUser(id)
}

export default {
  onmatch ({key}) {
    var resolver = this
    return Promise.all([
      getJs(() => import('./user.js')),
      getData(key)
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render ({attrs}) {
    var user = getUserById(attrs.key)
    this.title = `${user ? user.name : 'Not Found'} - User - Mithril`
    this.description = 'User Page'
    document.title = this.title
    return m(layout, m(this.component, attrs))
  }
}
