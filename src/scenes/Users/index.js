import m from 'mithril'
import {store} from '../../store'
import {loadUsers} from '../../data/users/actions'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  return await require.ensure([], (require) => {
    return require('./users.js').default
  })
}

async function getData () {
  return window.__STATE_IS_PRELOADED__ || store.dispatch(loadUsers())
}

export default {
  async onmatch () {
    const [ component ] = await Promise.all([
      getJs(),
      getData()
    ])

    this.component = component
    window.__STATE_IS_PRELOADED__ = false
  },
  render (vnode) {
    this.title = 'Users - Mithril'
    this.description = 'Users Page'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
