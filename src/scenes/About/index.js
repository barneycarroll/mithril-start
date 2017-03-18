import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'

export default {
  onmatch () {
    return getJs(() => import('./about.js'))
    .then((data) => {
      window.__STATE_IS_PRELOADED__ = false
      return data
    })
  },
  render (vnode) {
    this.title = 'About - Mithril'
    document.title = this.title
    return m(layout, vnode)
  }
}
