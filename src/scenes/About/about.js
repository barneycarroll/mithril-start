import m from 'mithril'
import c from './about.css'

export default {
  view (vnode) {
    return m('.' + c.about, [
      m('h1', 'About'),
      m('p', 'Mithril, Redux, Isomorphic Code Split application'),
      m('a', { href: 'http://github.com' }, 'Learn More')
    ])
  }
}
