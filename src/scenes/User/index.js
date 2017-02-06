import m from 'mithril'
import {store} from '../../store'
import {loadUser} from '../../data/users/actions'
import {beginRequest, completeRequest, thrownRequest} from '../../data/requests/actions'
import {getUserById} from '../../data/users/access'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  store.dispatch(beginRequest())
  return await require.ensure([], (require) => {
    var js = require('./user.js').default
    store.dispatch(completeRequest())
    return js
  })
}

async function getData (id) {
  return window.__STATE_IS_PRELOADED__ || store.dispatch(loadUser(id))
}

export default {
  async onmatch ({id}) {
    const [ component ] = await Promise.all([
      getJs(),
      getData(id).catch(() => store.dispatch(thrownRequest()))
    ])

    this.component = component
    window.__STATE_IS_PRELOADED__ = false
  },
  render ({attrs}) {
    var user = getUserById(attrs.id)
    this.title = `${user ? user.name : 'Not Found'} - User - Mithril`
    this.description = 'User Page'
    document.title = this.title
    return m(layout, attrs, m(this.component, attrs))
  }
}
