import m from 'mithril'
import {boundLoadUser} from '../../data/users/actions'
import {boundBeginRequest, boundCompleteRequest, boundThrowRequest} from '../../data/requests/actions'
import {getUserById} from '../../data/users/access'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  boundBeginRequest()
  return await require.ensure([], (require) => {
    var js = require('./user.js').default
    boundCompleteRequest()
    return js
  })
}

async function getData (id) {
  return window.__STATE_IS_PRELOADED__ || boundLoadUser(id)
}

export default {
  async onmatch ({key}) {
    const [ component ] = await Promise.all([
      getJs(),
      getData(key).catch(() => boundThrowRequest())
    ])

    this.component = component
    window.__STATE_IS_PRELOADED__ = false
  },
  render ({attrs}) {
    var user = getUserById(attrs.key)
    this.title = `${user ? user.name : 'Not Found'} - User - Mithril`
    this.description = 'User Page'
    document.title = this.title
    return m(layout, m(this.component, attrs))
  }
}
