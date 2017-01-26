import m from 'mithril'
import navbar from './components/navbar'

export default {
  view (vnode) {
    return m('.layout', [
      m(navbar),
      m('.layout-main', vnode.children)
    ])
  }
}
