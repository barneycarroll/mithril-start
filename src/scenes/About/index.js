import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'

export default {
  onmatch () {
    var resolver = this
    return Promise.all([
      getJs(() => import('./about.js'))
    ]).then((data) => {
      resolver.component = data[0]
      window.__STATE_IS_PRELOADED__ = false
    })
  },
  render (vnode) {
    this.title = 'About - Mithril'
    document.title = this.title
    return m(layout, vnode.attrs, m(this.component, vnode.attrs))
  }
}
