import m from 'mithril'
import about from './about'
import layout from '../../components/layout'

export default {
  onmatch () {

  },
  render (vnode) {
    this.title = 'About - Mithril'
    return m(layout, vnode.attrs, m(about, vnode.attrs))
  }
}
