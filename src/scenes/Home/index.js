import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'

export default {
  onmatch () {
    return getJs(() => import('./home.js'))
    .then((data) => {
      window.__STATE_IS_PRELOADED__ = false
      return data
    })
  },
  render (vnode) {
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    document.title = this.title
    return m(layout, vnode)
  }
}
