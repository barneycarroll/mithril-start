import m from 'mithril'
import {getJs} from '../../utils'
import layout from '../../components/layout'

export default {
  onmatch () {
    getJs(() => import('./userCreate.js'))
    .then((data) => {
      window.__STATE_IS_PRELOADED__ = false
      return data
    })
  },
  render (vnode) {
    this.title = 'Create - User - Mithril'
    this.description = 'User Create Page'
    document.title = this.title
    return m(layout, vnode)
  }
}
