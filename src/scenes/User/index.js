import m from 'mithril'
import store from '../../store'
import {loadUser} from '../../data/users/actions'
import {getUserById} from '../../data/users/access'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  return await require.ensure([], (require) => {
    return require('./user.js').default
  })
}

async function getData (id) {
  return window.__STATE_IS_PRELOADED__ || store().dispatch(loadUser(id))
}

export default {
  async onmatch ({id}) {
    const [ component ] = await Promise.all([
      getJs(),
      getData(id)
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
