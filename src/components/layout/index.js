import m from 'mithril'
import c from './layout.css'
import navbar from './components/navbar'

export default {
  view (vnode) {
    return m('.layout', [
      m(navbar),
      m(`.${c.layoutMain}`, vnode.children)
    ])
  }
}
