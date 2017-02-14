import m from 'mithril'
import c from './requestsPending.css'

export default {
  onbeforeremove: function (vnode) {
    vnode.dom.classList.add(c.exit)
    return new Promise(function (resolve) {
      setTimeout(resolve, 500)
    })
  },
  view ({attrs: {thrown, pending}}) {
    return m(`.${c.loading}`, [

      pending > thrown && m('p', {
        title: 'Some actions have failed, some are still pending',
        style: {
          color: thrown && 'red'
        }
      }, 'loading'),
      thrown > pending && m('p', {
        title: 'Some actions have failed'
      }, 'Error')
    ])
  }
}
