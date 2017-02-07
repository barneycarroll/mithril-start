import c from './navbar.css'
import m from 'mithril'
import sidebar from '../sidebar'
import {getNumberOfPendingRequests, getNumberOfThrownRequests} from '../../../../data/requests/access'
import requestsPending from '../requestsPending'

const navbarLinks = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'About',
    link: '/about'
  },
  {
    text: 'Users',
    link: '/users'
  }
]

export default {
  view (vnode) {
    return m('div.' + c.navbar, [
      m(`.${c.navbarInner}`, [
        m('ul.' + c.navbarLinkList, [
          navbarLinks.map((element, index) => {
            return m('li.navbar-list-item', [
              m('a.' + c.navbarListItemLink, { href: element.link, oncreate: m.route.link }, element.text)
            ])
          })
        ]),
        m(`.${c.metaInfo}`, [
          getNumberOfPendingRequests()
          ? m(requestsPending, {
            pending: getNumberOfPendingRequests(),
            thrown: getNumberOfThrownRequests()
          })
          : null
        ]),
        m(sidebar)
      ])
    ])
  }
}
