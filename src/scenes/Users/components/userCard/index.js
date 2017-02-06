import m from 'mithril'
import s from './userCard.css'

export default {
  view ({attrs: {user}}) {
    return m(`.${s.userCard}`, [
      m(`.${s.userMeta}`, [
        m('a.id', {
          href: `/users/${user.id}`,
          oncreate: m.route.link
        }, user.id),
        user.address && m('p', 'Address')
      ]),

      m(`.${s.userInfo}`, [
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
