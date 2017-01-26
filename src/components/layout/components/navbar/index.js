import css from './styles.css'
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
        m('ul', { className: css.navbarLinkList }, [
          navbarLinks.map((element, index) => {
            return m('li.navbar-list-item', [
              m('a.navbar-list-item-link', { href: element.link, oncreate: m.route.link }, element.text)
            ])
          })
        ])
      ])
    ])
  }
}
