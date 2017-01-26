import c from './styles.css'
import m from 'mithril'

const navbarLinks = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'About',
    link: '/about'
  }
]

export default {
  view (vnode) {
    return m('.navbar', [
      m('.navbar-inner', [
        m('ul.' + c.navbarLinkList, [
          navbarLinks.map((element, index) => {
            return m('li.navbar-list-item', [
              m('a.' + c.navbarListItemLink, { href: element.link, oncreate: m.route.link }, element.text)
            ])
          })
        ])
      ])
    ])
  }
}
