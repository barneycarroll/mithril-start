import m from 'mithril'
import layout from '../../components/layout'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

async function getJs () {
  return await require.ensure([], (require) => {
    return require('./home.js').default
  })
}

export default {
  async onmatch () {
    const [ component ] = await Promise.all([
      getJs(),
    ])

    this.component = component
    window.__STATE_IS_PRELOADED__ = false
  },
  render (vnode) {
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}


