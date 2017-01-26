import m from 'mithril'

export default {
  view (vnode) {
    return m('div', [
      m('a', {href: '/10', oncreate: m.route.link}, 'click'),
      vnode.attrs.number
    ])
  }
}
