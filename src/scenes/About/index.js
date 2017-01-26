import m from 'mithril'
import about from './about'
import layout from '../../components/layout'

export default {
  onmatch () {
    document.title = 'Home - Mithril'
  },
  render (vnode) {
    return m(layout, vnode.attrs, m(about, vnode.attrs))
  }
}
