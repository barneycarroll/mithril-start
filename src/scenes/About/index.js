import m from 'mithril'
import layout from '../../components/layout'

function getJs () {
  return import('./about.js')
}

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs(),
    ]).then((data) => {
      resolver.component = data[0].default
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'About - Mithril'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
