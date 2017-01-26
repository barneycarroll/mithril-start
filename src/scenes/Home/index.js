import m from 'mithril'
import home from './home'
import layout from '../../components/layout'

export default {
  onmatch () {
    document.title = 'Home - Mithril'
  },
  render (vnode) {
    return m(layout, vnode.attrs, m(home, vnode.attrs))
  }
}
