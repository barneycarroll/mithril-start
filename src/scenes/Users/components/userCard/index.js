import m from 'mithril'
import c from './userCard.css'

export default {
  view ({attrs: {user}}) {
    return m(`.${c.userCard}`, [
      m(`.${c.userMeta}`, [
        m('a.id', {
          href: `/users/${user.id}`,
          oncreate: m.route.link
        }, user.id),
        user.address && m('p', 'Address')
      ]),

      m(`.${c.userInfo}`, [
        m('h2.name', user.name),
        m('.address', [
          user.address &&
          m('address', [
            user.address.streetName && m('p.streetName', user.address.streetName),
            user.address.county && m('p.county', user.address.county),
            user.address.zipCode && m('p.zipCode', user.address.zipCode)
          ])
        ])
      ])
    ])
  }
}
