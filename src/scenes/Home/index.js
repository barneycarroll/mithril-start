import m from 'mithril'
import home from './home'
import layout from '../../components/layout'

export default {
  onmatch () {

  },
  render (vnode) {
    this.title = 'Home - Mithril'
    this.description = 'test the meta description'
    return m(layout, vnode.attrs, m(home, vnode.attrs))
  }
}
